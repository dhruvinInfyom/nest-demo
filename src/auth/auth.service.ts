import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsersService)) private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async create(createAuthDto) {
    return await this.usersService.create(createAuthDto);
  }

  async login(createAuthDto) {
    const token = await this.jwtService.sign(createAuthDto);
    console.log('🚀 ~ AuthService ~ login ~ token:', token);
    return this.usersService.login(createAuthDto);
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
