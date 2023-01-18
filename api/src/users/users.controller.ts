import { Body, Controller, Get, Post, Res, Req, Request } from '@nestjs/common';
import { Users } from 'src/typeorm/users.entity';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create.users.dto';
import { CredentialsDto } from './dto/credentials.dto';

@Controller('auth')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // ログインユーザー情報を取得
  @Get('profile')
  async findByToken(@Req() request: any): Promise<Users> {
    return await this.usersService.findByToken(request);
  }

  // 新規登録
  @Post('signup')
  async singUp(
    @Body()
    createUserDto: CreateUserDto,
  ): Promise<Users> {
    return await this.usersService.singUp(createUserDto);
  }

  // ログイン
  @Post('signin')
  async signIn(
    @Body()
    credentialsDto: CredentialsDto,
    @Res({ passthrough: true }) response: any,
  ): Promise<Users> {
    return await this.usersService.signIn(credentialsDto, response);
  }
}
