import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AuthService } from './auth.service';
import { UserRole } from 'src/users/entities/user.entity';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ApiBody({schema:{
    type:'object',
    properties:{
      name:{type:'string'},
      email:{type:'string'},
      password:{type:'string'},
      role: { 
        type: 'string',
        example: UserRole.USER 
      },
    }}})
  create(@Body() createAuthDto: CreateUserDto) {
    return this.authService.create(createAuthDto);
  }

  @Post('login')
  @ApiBody({schema:{
    type:'object',
    properties:{
      email:{type:'string'},
      password:{type:'string'}
    }}}) 
  login(@Body() loginAuthDto: CreateUserDto) {
    return this.authService.login(loginAuthDto);
  }
}
