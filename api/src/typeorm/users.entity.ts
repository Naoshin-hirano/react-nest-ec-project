import { Exclude } from 'class-transformer';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
// import { Products } from './products.entity';

@Entity()
export class Users {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  username: string;

  @Column()
  @Exclude({ toPlainOnly: true })
  password: string;

  @Column()
  imageURL: string;

  @Column()
  createdAt?: string;

  @Column()
  updatedAt?: string;

  //   @OneToMany(() => Products, (product) => product.user)
  //   products?: Products[];
}
