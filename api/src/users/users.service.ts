import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Users } from '../typeorm/users.entity';
import { CreateUserDto } from './dto/create.users.dto';
import { JwtService } from '@nestjs/jwt';
import { CredentialsDto } from './dto/credentials.dto';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) private usersRepository: Repository<Users>,
    private jwtService: JwtService,
  ) {}

  // 新規登録
  async singUp(createUserDto: CreateUserDto): Promise<Users> {
    const { username, password } = createUserDto;
    const salt = await bcrypt.genSalt();
    const hashpassword = await bcrypt.hash(password, salt);
    const user = this.usersRepository.create({
      username,
      password: hashpassword,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    await this.usersRepository.save(user);
    return user;
  }

  // ログイン
  async signIn(credentialsDto: CredentialsDto): Promise<Users> {
    const { username, password } = credentialsDto;
    const user = await this.usersRepository.findOne({ username });

    // リクエストのpasswordとDBのtokenを元に戻したpasswordを比較する
    if (user && (await bcrypt.compare(password, user.password))) {
      const payload = {
        id: user.id,
        password: user.password,
        username: user.username,
      };
      // id, password, usernameをtokenに変換して返す
      const accessToken = await this.jwtService.sign(payload);
      return {
        id: payload.id,
        password: payload.password,
        username: payload.username,
        accessToken,
      };
    }
    throw new UnauthorizedException(
      '入力したユーザー名またはパスワードが存在しません',
    );
  }
}
