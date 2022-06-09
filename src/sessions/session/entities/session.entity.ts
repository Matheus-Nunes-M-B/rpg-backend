import { ApiProperty } from '@nestjs/swagger';
import { Sheet } from 'src/sheets/sheet/entities/sheet.entity';
import { User } from 'src/users/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

export enum SessionStatus {
  ONLINE = 'ONLINE',
  OFFLINE = 'OFFLINE',
  COMPLETED = 'COMPLETED',
  CANCELED = 'CANCELED',
}

@Entity()
export class Session {
  @PrimaryGeneratedColumn()
  id: number;
  @ApiProperty()
  @Column()
  name: string;
  @ApiProperty()
  @Column()
  status: SessionStatus;
  @ApiProperty()
  @Column()
  background: string;
  sheets: Sheet[];
  players: User[];
  @ManyToOne(() => User, (user) => user.sessions)
  @JoinColumn({ name: 'master_id' })
  master: User;
  @Column({ name: 'master_id' })
  masterId: number;
}
