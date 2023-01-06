import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
// import { Users } from 'src/typeorm';
import { Products } from 'src/typeorm/products.entity';
// import { GetUser } from 'src/users/decorator/get-user.decorator';
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
    // @GetUser() users: Users,
  ): Promise<Products> {
    return await this.productsService.create(createProductsDto);
  }

  @Delete(':id')
  async delete(@Param('id', ParseUUIDPipe) id: number): Promise<string> {
    return await this.productsService.delete(id);
  }
}
