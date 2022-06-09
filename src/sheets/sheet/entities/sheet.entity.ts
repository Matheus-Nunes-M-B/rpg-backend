import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Sheet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
