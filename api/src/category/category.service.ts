import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/typeorm/category.entity';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create.category.dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async findAll(): Promise<Category[]> {
    return await this.categoryRepository.find({
      relations: ['products'],
    });
  }

  async findById(id): Promise<Category> {
    const category = await this.categoryRepository.findOne(id, {
      relations: ['products'],
    });
    return category;
  }

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const newCategory = await this.categoryRepository.create({
      ...createCategoryDto,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
    await this.categoryRepository.save(newCategory);
    return newCategory;
  }
}
