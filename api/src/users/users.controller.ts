import { Body, Controller, Post } from '@nestjs/common';
import { Users } from 'src/typeorm/users.entity';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create.users.dto';
import { CredentialsDto } from './dto/credentials.dto';

@Controller('auth')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('signup')
  async singUp(
    @Body()
    createUserDto: CreateUserDto,
  ): Promise<Users> {
    return await this.usersService.singUp(createUserDto);
  }

  @Post('signin')
  async signIn(
    @Body()
    credentialsDto: CredentialsDto,
  ): Promise<{ accessToken: string }> {
    return await this.usersService.signIn(credentialsDto);
  }
}
