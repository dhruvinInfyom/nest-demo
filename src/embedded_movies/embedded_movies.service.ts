import { Injectable } from '@nestjs/common';
import { CreateEmbeddedMovieDto } from './dto/create-embedded_movie.dto';
import { UpdateEmbeddedMovieDto } from './dto/update-embedded_movie.dto';

@Injectable()
export class EmbeddedMoviesService {
  create(createEmbeddedMovieDto: CreateEmbeddedMovieDto) {
    return 'This action adds a new embeddedMovie';
  }

  findAll() {
    return `This action returns all embeddedMovies`;
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
