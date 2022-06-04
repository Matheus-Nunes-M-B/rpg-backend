import {
  BeforeInsert, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn,
} from 'typeorm';
import { hashSync } from 'bcrypt';
import { ApiProperty } from '@nestjs/swagger';


export enum UserType {
  MASTER = "MASTER",
  PLAYER = 'PLAYER'
}



@Entity()
export class User {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column({ nullable: true })
  @ApiProperty()
  name: string;

  @Column({ nullable: true })
  @ApiProperty()
  username: string;

  @Column({ nullable: true })
  @ApiProperty()
  type: UserType;

  @CreateDateColumn({ name: 'created_at' })
  @ApiProperty()
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  @ApiProperty()
  updatedAt: Date;
}
