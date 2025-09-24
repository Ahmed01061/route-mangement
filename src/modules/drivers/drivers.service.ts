import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDriverDto } from '../../common/dtos/driver.dto';

@Injectable()
export class DriversService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateDriverDto) {
    return this.prisma.driver.create({ data: dto });
  }

  async findHistory(id: number) {
    const driver = await this.prisma.driver.findUnique({
      where: { id },
      include: { routes: true },
    });
    if (!driver) throw new NotFoundException('Driver not found');
    return driver.routes;
  }

  findAvailable() {
    return this.prisma.driver.findFirst({ where: { availability: true } });
  }

  async setUnavailable(driverId: number) {
    await this.prisma.driver.update({
      where: { id: driverId },
      data: { availability: false },
    });
  }
}
