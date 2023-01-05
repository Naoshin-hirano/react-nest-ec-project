import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from './category.entity';
import { Users } from './users.entity';

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

  @Column()
  userId: string;

  @Column()
  categoryId: string;

  @OneToMany(() => Category, (category) => category.product)
  categories: Category[];

  @OneToMany(() => Users, (user) => user.product)
  users: Users[];
}
