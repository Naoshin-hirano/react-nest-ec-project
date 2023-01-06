import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Category } from 'src/typeorm/category.entity';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create.category.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async findAll(): Promise<Category[]> {
    return await this.categoryService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Category> {
    return await this.categoryService.findById(id);
  }

  @Post()
  async create(
    @Body() createCategoryDto: CreateCategoryDto,
  ): Promise<Category> {
    return await this.categoryService.create(createCategoryDto);
  }
}
