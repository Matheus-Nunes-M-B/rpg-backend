import { ApiProperty } from '@nestjs/swagger';
import { Sheet } from 'src/sheets/sheet/entities/sheet.entity';
import { User } from 'src/users/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
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
  @ApiProperty({ type: () => Sheet })
  @OneToMany(() => Sheet, (sheet) => sheet.session)
  sheets: Sheet[];
  @ApiProperty({ type: () => User })
  @ManyToMany(() => User, (user) => user.sessions)
  players: User[];
  @ApiProperty({ type: () => User })
  @ManyToOne(() => User, (user) => user.mySessions)
  @JoinColumn({ name: 'master_id' })
  master: User;
  @ApiProperty()
  @Column({ name: 'master_id' })
  masterId: number;
}
