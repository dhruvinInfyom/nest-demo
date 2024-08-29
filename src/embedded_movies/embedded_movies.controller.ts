import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { EmbeddedMoviesService } from './embedded_movies.service';
import { CreateEmbeddedMovieDto } from './dto/create-embedded_movie.dto';
import { UpdateEmbeddedMovieDto } from './dto/update-embedded_movie.dto';
import { ApiQuery, ApiTags } from '@nestjs/swagger';

@Controller('embedded-movies')
@ApiTags('embedded-movies')
export class EmbeddedMoviesController {
  constructor(private readonly embeddedMoviesService: EmbeddedMoviesService) {}

  @Post()
  create(@Body() createEmbeddedMovieDto: CreateEmbeddedMovieDto) {
    return this.embeddedMoviesService.create(createEmbeddedMovieDto);
  }

  @Get()
  @ApiQuery({ name: 'search', type: String, required: false })
  @ApiQuery({ name: 'page', type: Number, required: false })
  @ApiQuery({ name: 'limit', type: Number, required: false })
  findAll(
    @Query('page') search: string,
    @Query('page') page: number,
    @Query('limit') limit: number,
  ) {
    return this.embeddedMoviesService.findAll(search, +page, +limit);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.embeddedMoviesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEmbeddedMovieDto: UpdateEmbeddedMovieDto,
  ) {
    return this.embeddedMoviesService.update(+id, updateEmbeddedMovieDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.embeddedMoviesService.remove(+id);
  }
}
