import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import { Products } from 'src/typeorm/products.entity';
import { CreateProductsDto } from './dto/create.products.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async findAll(): Promise<Products[]> {
    return await this.productsService.findAll();
  }

  @Post()
  async create(
    @Body() createProductsDto: CreateProductsDto,
  ): Promise<Products> {
    return await this.productsService.create(createProductsDto);
  }

  @Delete(':id')
  async delete(@Param('id', ParseUUIDPipe) id: string): Promise<string> {
    return await this.productsService.delete(id);
  }
}
