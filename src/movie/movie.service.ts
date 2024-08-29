import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Movie, MovieDocument } from './entities/movie.entity';
import { Model } from 'mongoose';

@Injectable()
export class MovieService {
  constructor(
    @InjectModel(Movie.name) private readonly MovieModel: Model<MovieDocument>,
  ) {}
  create(createMovieDto: CreateMovieDto) {
    return 'This action adds a new movie';
  }

  async findAll(page, limit) {
    const skip = (page - 1) * limit;
    const MovieDocument = await this.MovieModel.aggregate([
      { $skip: skip },
      { $limit: limit },
    ]);
    return { data: MovieDocument };
  }

  findOne(id: number) {
    return `This action returns a #${id} movie`;
  }

  update(id: number, updateMovieDto: UpdateMovieDto) {
    return `This action updates a #${id} movie`;
  }

  remove(id: number) {
    return `This action removes a #${id} movie`;
  }
}
