import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { FavoritsModule } from './favorits/favorits.module';
import { CategoriesModule } from './categories/categories.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from './typeorm';
// import { join } from 'node:path';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Naoyakun1!',
      database: 'react_nest_ec_app',
      //   entities: ['src/typeor/*.entity.{ts,js}'],
      entities,
      autoLoadEntities: true,
      synchronize: true,
    }),
    ProductsModule,
    FavoritsModule,
    CategoriesModule,
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor() {}
}
