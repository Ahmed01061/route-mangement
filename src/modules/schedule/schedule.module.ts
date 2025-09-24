import { Module } from '@nestjs/common';
import { ScheduleController } from './schedule.controller';
import { RoutesModule } from '../routes/routes.module';

@Module({
  imports: [RoutesModule], 
  controllers: [ScheduleController],
})
export class ScheduleModule {}
