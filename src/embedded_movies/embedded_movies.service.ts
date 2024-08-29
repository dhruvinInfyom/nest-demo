import { Injectable } from '@nestjs/common';
import { CreateEmbeddedMovieDto } from './dto/create-embedded_movie.dto';
import { UpdateEmbeddedMovieDto } from './dto/update-embedded_movie.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  Embedded_Movie,
  Embedded_MovieDocument,
} from './entities/embedded_movie.entity';

@Injectable()
export class EmbeddedMoviesService {
  constructor(
    @InjectModel(Embedded_Movie.name)
    private readonly EmbeddedMovieModel: Model<Embedded_MovieDocument>,
  ) {}
  create(createEmbeddedMovieDto: CreateEmbeddedMovieDto) {
    return 'This action adds a new embeddedMovie';
  }

  async findAll(search, page, limit) {
    const skip = (page - 1) * limit;
    const MovieDocument = await this.EmbeddedMovieModel.aggregate([
      {
        $match: {
          $or: [{ title: { $regex: search, $options: 'i' }},{ plot: { $regex: search, $options: 'i' }}, { fullplot: { $regex: search, $options: 'i' }}],
        },
      },
      { $skip: skip },
      { $limit: limit },
    ]);
    return { data: MovieDocument };
  }

  findOne(id: number) {
    return `This action returns a #${id} embeddedMovie`;
  }

  update(id: number, updateEmbeddedMovieDto: UpdateEmbeddedMovieDto) {
    return `This action updates a #${id} embeddedMovie`;
  }

  remove(id: number) {
    return `This action removes a #${id} embeddedMovie`;
  }
}
