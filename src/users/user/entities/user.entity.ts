import {
  BeforeInsert, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn,
} from 'typeorm';
import {hashSync} from 'bcrypt';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  @ApiProperty()
    id: number;

  @Column({ nullable: true })
  @ApiProperty()
    email: string;

  @Column({ nullable: true, select: false })
    password: string;

  @Column({ nullable: true, select: false })
  @ApiProperty()
    description: string;


  @CreateDateColumn({ name: 'created_at' })
  @ApiProperty()
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    @ApiProperty()
    updatedAt: Date;


  @BeforeInsert()
  async hashPassword() {
    this.password = hashSync(this.password, 10)
  }
}
