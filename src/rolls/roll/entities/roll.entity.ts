import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Dice } from './dice.entity';
import { evaluate } from 'mathjs';
import { User } from '~/users/user/entities/user.entity';
import { Session } from '~/sessions/session/entities/session.entity';

@Entity()
export class Roll {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  public readonly expression: string;
  @Column()
  result: string;
  @Column()
  total: number;

  @ManyToOne(() => User, (user) => user.rolls, { eager: true })
  owner: User;
  @Column({ name: 'owner_id' })
  ownerId: number;

  @ManyToOne(() => Session)
  session: Session;
  @Column({ name: 'session_id' })
  sessionId: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  private treatedExpression: string;

  private handleExpressionSymbols(expression: string) {
    const re = /([-!$%^&*()_+|~=`{}\[\]";'<>?,.\/])/g;
    let expr = expression.replace(re, ' $1 ');
    expr = expr.trim();
    expr = expr.replace(/\s+/g, ' ');
    return expr;
  }
  private getTotalFromExpression(expr: string) {
    const args = expr.split(' ');
    const results: Array<Dice | string> = [];
    for (const arg of args) {
      if (Dice.isDice(arg)) {
        const [faces, quantity] = arg.split('d');
        results.push(new Dice(+faces, +quantity));
      } else {
        results.push(arg);
      }
    }
    return results;
  }
  private getTotal(values: Array<Dice | string>): number {
    let expr = '';
    for (const value of values) {
      if (typeof value === 'string') {
        expr += value + ' ';
      } else {
        expr += value.total + ' ';
      }
    }
    return evaluate(expr);
  }
  private getResultExpression(values: Array<Dice | string>): string {
    let expr = '';
    for (const value of values) {
      if (typeof value === 'string') {
        expr += value + ' ';
      } else {
        expr += `${value}`;
      }
    }
    return expr;
  }
  @BeforeInsert()
  collapseRoll() {
    this.treatedExpression = this.handleExpressionSymbols(this.expression);
    const results = this.getTotalFromExpression(this.treatedExpression);
    this.total = this.getTotal(results);
    this.result = this.getResultExpression(results);
  }
}
