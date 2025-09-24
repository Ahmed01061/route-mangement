import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { DriversService } from './drivers.service';
import { CreateDriverDto } from '../../common/dtos/driver.dto';

@Controller('drivers')
export class DriversController {
  constructor(private readonly driversService: DriversService) {}

  @Post()
  create(@Body() dto: CreateDriverDto) {
    return this.driversService.create(dto);
  }

  @Get(':id/history')
  getHistory(@Param('id') id: string) {
    return this.driversService.findHistory(+id);
  }
}
