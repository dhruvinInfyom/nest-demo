import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { SessionsController } from './sessions/sessions.controller';
import { MovieController } from './movie/movie.controller';
import { TheatersController } from './theaters/theaters.controller';
import { EmbeddedMoviesController } from './embedded_movies/embedded_movies.controller';
import { UsersModule } from './users/users.module';
import { TheatersModule } from './theaters/theaters.module';
import { SessionsModule } from './sessions/sessions.module';
import { MovieModule } from './movie/movie.module';
import { EmbeddedMoviesModule } from './embedded_movies/embedded_movies.module';
import { CommentsModule } from './comments/comments.module';
import { CommentsController } from './comments/comments.controller';
import { CommentsService } from './comments/comments.service';
import { UsersService } from './users/users.service';
import { SessionsService } from './sessions/sessions.service';
import { MovieService } from './movie/movie.service';
import { TheatersService } from './theaters/theaters.service';
import { EmbeddedMoviesService } from './embedded_movies/embedded_movies.service';

@Module({
  imports: [
    UsersModule,
    TheatersModule,
    SessionsModule,
    MovieModule,
    EmbeddedMoviesModule,
    CommentsModule,
  ],
  controllers: [
    AppController,
    CommentsController,
    UsersController,
    SessionsController,
    MovieController,
    TheatersController,
    EmbeddedMoviesController,
  ],
  providers: [
    AppService,
    CommentsService,
    UsersService,
    SessionsService,
    MovieService,
    TheatersService,
    EmbeddedMoviesService,
  ],
})
export class AppModule {}
