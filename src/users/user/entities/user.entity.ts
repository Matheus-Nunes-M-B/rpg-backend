import {
  Column,
  Entity,
  Index,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Sheet } from 'src/sheets/sheet/entities/sheet.entity';
import { Session } from 'src/sessions/session/entities/session.entity';

export enum UserType {
  MASTER = 'MASTER',
  PLAYER = 'PLAYER',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column({ nullable: true })
  @ApiProperty()
  name: string;

  @Column({ nullable: true, unique: true })
  @ApiProperty()
  @Index()
  username: string;

  @Column({ nullable: true })
  @ApiProperty()
  avatar: string;

  @Column({ nullable: true })
  @ApiProperty()
  type: UserType;

  @OneToMany(() => Sheet, (sheet) => sheet.owner)
  sheets: Sheet[];

  @OneToMany(() => Session, (session) => session.master)
  mySessions: Session[];

  @ManyToMany(() => Session, (session) => session.players)
  @JoinTable({
    name: 'user_session',
    joinColumn: { name: 'player_id' },
    inverseJoinColumn: { name: 'session_id' },
  })
  sessions: Session[];
}
