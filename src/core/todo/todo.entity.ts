import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TodoEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column('boolean', {default: false})
  complete: boolean;
}