import { ApiProperty } from '@nestjs/swagger';
import { Sheet } from 'src/sheets/sheet/entities/sheet.entity';
import { User } from 'src/users/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

export enum SessionStatus {
  ONLINE = 'ONLINE',
  OFFLINE = 'OFFLINE',
  COMPLETED = 'COMPLETED',
  CLOSED = 'CLOSED',
}

@Entity()
export class Session {
  @PrimaryGeneratedColumn()
  id: number;
  @ApiProperty()
  @Column()
  name: string;
  @ApiProperty()
  @Column({ default: SessionStatus.OFFLINE })
  status: SessionStatus;
  @ApiProperty()
  @Column()
  background: string;
  @ApiProperty({ type: () => Sheet })
  @OneToMany(() => Sheet, (sheet) => sheet.session)
  sheets: Sheet[];

  @ApiProperty({ type: () => User })
  @ManyToMany(() => User, (user) => user.sessions)
  @JoinTable({
    name: 'user_session',
    joinColumn: { name: 'session_id' },
    inverseJoinColumn: { name: 'player_id' },
  })
  players: User[];

  @ApiProperty({ type: () => User })
  @ManyToMany(() => User, (user) => user.mySessions)
  @JoinColumn({ name: 'master_id' })
  master: User;

  @ApiProperty()
  @Column({ name: 'master_id' })
  masterId: number;
}
