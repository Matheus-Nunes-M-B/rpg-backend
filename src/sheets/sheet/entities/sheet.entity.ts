import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/users/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

export type Law_Chaos = 'Lawful' | 'Neutral' | 'Chaotic';
export type Good_Evil = 'Good' | 'Neutral' | 'Evil';
export type Alignment = `${Law_Chaos} - ${Good_Evil}`;

export enum SheetRole {
  Mage = 'Mage',
  Warrior = 'Warrior',
  Rogue = 'Rogue',
  Cleric = 'Cleric',
}

@Entity()
export class Sheet {
  @PrimaryGeneratedColumn()
  id: number;

  // SCENARIO
  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column()
  gender: string;

  @ApiProperty()
  @Column({
    type: 'text',
    nullable: true,
  })
  image: string;

  @ApiProperty()
  @Column()
  alignment: Alignment;

  @ApiProperty()
  @Column({
    type: 'text',
    nullable: true,
  })
  background: string;

  @ApiProperty()
  // DATA
  @Column()
  role: SheetRole;

  @ApiProperty()
  @Column({ default: 1 })
  level: number;

  @ApiProperty()
  @Column({ default: 0 })
  experience: number;

  @ApiProperty()
  @Column({ default: 100 })
  health: number;

  @ApiProperty()
  @Column({ default: 10 })
  strength: number;

  @ApiProperty()
  @Column({ default: 10 })
  dexterity: number;

  @ApiProperty()
  @Column({ default: 10 })
  intelligence: number;

  @ApiProperty()
  @Column({ default: 10 })
  constitution: number;

  @ApiProperty()
  @ManyToOne(() => User, (user) => user.sheets)
  @JoinColumn({ name: 'owner_id' })
  owner: User;
  @Column({ name: 'owner_id' })
  ownerId: number;
}
