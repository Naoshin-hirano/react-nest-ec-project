import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { FavoritsModule } from './favorits/favorits.module';
import { UsersModule } from './users/users.module';
import { CategoryModule } from './category/category.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from './typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Naoyakun1!',
      database: 'react_nest_ec_app',
      entities,
      autoLoadEntities: true,
      synchronize: true,
    }),
    ProductsModule,
    FavoritsModule,
    UsersModule,
    CategoryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor() {}
}
