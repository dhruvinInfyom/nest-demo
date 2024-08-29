import { Injectable } from '@nestjs/common';
import { CreateTheaterDto } from './dto/create-theater.dto';
import { UpdateTheaterDto } from './dto/update-theater.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Theater, TheaterDocument } from './entities/theater.entity';

@Injectable()
export class TheatersService {
  constructor(
    @InjectModel(Theater.name)
    private readonly TheatersModel: Model<TheaterDocument>,
  ) {}
  async create(createTheaterDto: CreateTheaterDto) {
    // await
    return 'This action adds a new theater';
  }

  async findAll(page, limit) {
    const skip = (page - 1) * limit;
    const theater = await this.TheatersModel.aggregate([
      { $skip: skip },
      { $limit: limit },
    ]);
    return {
      data: theater,
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} theater`;
  }

  update(id: number, updateTheaterDto: UpdateTheaterDto) {
    return `This action updates a #${id} theater`;
  }

  remove(id: number) {
    return `This action removes a #${id} theater`;
  }
}
