import { Module } from '@nestjs/common';
import { EmbeddedMoviesService } from './embedded_movies.service';
import { EmbeddedMoviesController } from './embedded_movies.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Embedded_Movie, Embedded_MovieSchema } from './entities/embedded_movie.entity';

@Module({
  imports: [MongooseModule.forFeature([{name:Embedded_Movie.name, schema:Embedded_MovieSchema}])],
  controllers: [EmbeddedMoviesController],
  providers: [EmbeddedMoviesService],
  exports: [EmbeddedMoviesService]
})
export class EmbeddedMoviesModule {}
