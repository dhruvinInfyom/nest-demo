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
import { TheatersService } from './theaters.service';
import { CreateTheaterDto } from './dto/create-theater.dto';
import { UpdateTheaterDto } from './dto/update-theater.dto';
import { ApiQuery, ApiTags } from '@nestjs/swagger';

@Controller('theaters')
@ApiTags('theaters')
export class TheatersController {
  constructor(private readonly theatersService: TheatersService) {}

  @Post()
  create(@Body() createTheaterDto: CreateTheaterDto) {
    return this.theatersService.create(createTheaterDto);
  }

  @Get()
  @ApiQuery({ name: 'page', type: Number, required: false })
  @ApiQuery({ name: 'limit', type: Number, required: false })
  findAll(@Query('page') page: number, @Query('limit') limit: number) {
    return this.theatersService.findAll(+page, +limit);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.theatersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTheaterDto: UpdateTheaterDto) {
    return this.theatersService.update(+id, updateTheaterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.theatersService.remove(+id);
  }
}
