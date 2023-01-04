import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Products } from 'src/typeorm/products.entity';
import { Repository } from 'typeorm';
import { CreateProductsDto } from './dto/create.products.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Products)
    private productsRepository: Repository<Products>,
  ) {}

  async findAll(): Promise<Products[]> {
    return await this.productsRepository.find();
  }

  async create(createProductsDto: CreateProductsDto): Promise<Products> {
    const newItem = await this.productsRepository.create({
      ...createProductsDto,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
    await this.productsRepository.save(newItem);
    return newItem;
  }

  async delete(id: string): Promise<string> {
    await this.productsRepository.delete({ id });
    return '削除完了しました';
  }
}
