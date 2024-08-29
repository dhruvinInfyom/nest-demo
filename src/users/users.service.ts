import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';
import { UserDocument, Users } from './entities/user.entity';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users.name) private readonly userModel: Model<UserDocument>,
  ) {}

  async create(createUserDto) {
    try {
      const findUser = await this.userModel.findOne({email: createUserDto.email})
      if(findUser) throw new HttpException('User already exists', HttpStatus.BAD_REQUEST)
        createUserDto.password = await bcrypt.hash(createUserDto.password, 10);
      const User = await this.userModel.create(createUserDto);
      await User.save();
      return User;
    }catch (error) {
      throw new  HttpException(error, HttpStatus.BAD_REQUEST)
    }
  }

  async login(user){
    try{
      const findUser = await this.userModel.findOne({email: user.email})
      if(!findUser) throw new HttpException('User not found', HttpStatus.BAD_REQUEST)
        return findUser;
    }catch (error) {
      throw new  HttpException(error, HttpStatus.BAD_REQUEST)
    }
  }

  async findAll(page, limit) {
    const skip = (page - 1) * limit;
    const User = await this.userModel.aggregate([
      {
        $skip: skip,
      },
      { $limit: limit },
    ]);
    return { data: User };
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
