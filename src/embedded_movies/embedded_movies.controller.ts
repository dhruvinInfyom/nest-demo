import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmbeddedMoviesService } from './embedded_movies.service';
import { CreateEmbeddedMovieDto } from './dto/create-embedded_movie.dto';
import { UpdateEmbeddedMovieDto } from './dto/update-embedded_movie.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('embedded-movies')
@ApiTags('embedded-movies')
export class EmbeddedMoviesController {
  constructor(private readonly embeddedMoviesService: EmbeddedMoviesService) {}

  @Post()
  create(@Body() createEmbeddedMovieDto: CreateEmbeddedMovieDto) {
    return this.embeddedMoviesService.create(createEmbeddedMovieDto);
  }

  @Get()
  findAll() {
    return this.embeddedMoviesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.embeddedMoviesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmbeddedMovieDto: UpdateEmbeddedMovieDto) {
    return this.embeddedMoviesService.update(+id, updateEmbeddedMovieDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.embeddedMoviesService.remove(+id);
  }
}
