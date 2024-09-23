import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TheatersModule } from './theaters/theaters.module';
import { SessionsModule } from './sessions/sessions.module';
import { MovieModule } from './movie/movie.module';
import { EmbeddedMoviesModule } from './embedded_movies/embedded_movies.module';
import { CommentsModule } from './comments/comments.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { ChatModule } from './chat/chat.module';
import { MessagesModule } from './messages/messages.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://dhruvininfyom:DhruvinInfyom@cluster0.5sajf.mongodb.net/'),
    UsersModule,
    TheatersModule,
    SessionsModule,
    MovieModule,
    EmbeddedMoviesModule,
    CommentsModule,
    AuthModule,
    ChatModule,
    MessagesModule,
  ],
  providers: [AppService],
})
export class AppModule {}
