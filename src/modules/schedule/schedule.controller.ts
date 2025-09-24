import { Controller, Get } from '@nestjs/common';
import { RoutesService } from '../routes/routes.service';

@Controller('schedule')
export class ScheduleController {
  constructor(private readonly routesService: RoutesService) {}

  @Get()
  async getSchedule() {
    return this.routesService.findSchedule();
  }
}
