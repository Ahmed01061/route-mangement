import { Module } from '@nestjs/common';
import { PrismaService } from './modules/prisma/prisma.service';
import { PrismaModule } from './modules/prisma/prisma.module';
import { DriversModule } from './modules/drivers/drivers.module';
import { RoutesModule } from './modules/routes/routes.module';
import { ScheduleModule } from './modules/schedule/schedule.module';

@Module({
  imports: [
    PrismaModule,
    DriversModule,
    RoutesModule,
    ScheduleModule,
  ],
  providers: [PrismaService],
})
export class AppModule {}
