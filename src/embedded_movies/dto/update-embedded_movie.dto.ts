import { PartialType } from '@nestjs/mapped-types';
import { CreateEmbeddedMovieDto } from './create-embedded_movie.dto';

export class UpdateEmbeddedMovieDto extends PartialType(CreateEmbeddedMovieDto) {}
