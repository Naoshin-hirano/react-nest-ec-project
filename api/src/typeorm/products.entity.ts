import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Products {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    nullable: false,
  })
  title: string;

  @Column({
    nullable: false,
    length: 100,
  })
  description: string;

  @Column()
  price: number;

  @Column()
  image: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
