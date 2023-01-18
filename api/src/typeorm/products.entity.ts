import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from './category.entity';
// import { Users } from './users.entity';

@Entity()
export class Products {
  @PrimaryGeneratedColumn()
  id: number;

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

  //   @Column()
  //   userId: string;

  @Column()
  categoryId: number;

  @ManyToOne(() => Category, (category) => category.products)
  category: Category;

  //   @ManyToOne(() => Users, (user) => user.products)
  //   user: Users;
}
