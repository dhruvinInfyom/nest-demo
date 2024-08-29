import { Module } from '@nestjs/common';
import { EmbeddedMoviesService } from './embedded_movies.service';
import { EmbeddedMoviesController } from './embedded_movies.controller';

@Module({
  controllers: [EmbeddedMoviesController],
  providers: [EmbeddedMoviesService],
})
export class EmbeddedMoviesModule {}
