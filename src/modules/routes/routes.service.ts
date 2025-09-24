import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRouteDto } from '../../common/dtos/route.dto';
import { DriversService } from '../drivers/drivers.service';

@Injectable()
export class RoutesService {
  constructor(
    private prisma: PrismaService,
    private driversService: DriversService,
  ) {}

  async create(dto: CreateRouteDto) {
    let status: 'assigned' | 'unassigned' = 'unassigned';
    let driver = await this.driversService.findAvailable();

    let driverId: number | null = null;
    if (driver) {
      status = 'assigned';
      driverId = driver.id;
      await this.driversService.setUnavailable(driver.id);
    }

    return this.prisma.route.create({
      data: { ...dto, status, driverId },
    });
  }

  async findAll(page = 1, limit = 10) {
    const [data, total] = await Promise.all([
      this.prisma.route.findMany({
        skip: (page - 1) * limit,
        take: limit,
        include: { driver: true },
      }),
      this.prisma.route.count(),
    ]);

    return { data, meta: { page, limit, total } };
  }

  async findSchedule() {
    const routes = await this.prisma.route.findMany({ include: { driver: true } });
    return routes.map((r) => ({
      routeId: r.id,
      startLocation: r.startLocation,
      endLocation: r.endLocation,
      status: r.status,
      driver: r.driver ? { id: r.driver.id, name: r.driver.name } : 'unassigned',
    }));
  }
}
