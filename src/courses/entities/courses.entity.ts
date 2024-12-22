import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

//Decorator do TypeORM, define a classe como uma entidade no banco de dados:
@Entity('courses')
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column('json', { nullable: true })
  tags: string[];
}
