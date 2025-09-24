import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { RoutesService } from './routes.service';
import { CreateRouteDto } from '../../common/dtos/route.dto';

@Controller('routes')
export class RoutesController {
  constructor(private readonly routesService: RoutesService) {}

  @Post()
  create(@Body() dto: CreateRouteDto) {
    return this.routesService.create(dto);
  }

  @Get()
  findAll(@Query('page') page = 1, @Query('limit') limit = 10) {
    return this.routesService.findAll(+page, +limit);
  }
}
