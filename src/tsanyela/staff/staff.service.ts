import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateStaffDto, UpdateStaffDto } from './staff.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class StaffService {
  constructor(private prisma: PrismaService) {}

  async create(createStaffDto: CreateStaffDto) {
    const { userId, staffTypeId, ...rest } = createStaffDto;

    // TODO - compare DTO with Schema
    if (typeof userId !== 'string') {
      throw new Error('userId must be a string.');
    }

    const data: any = {
      ...rest,
      userId,
      staffType: staffTypeId ? { connect: { id: staffTypeId } } : undefined,
    };

    return this.prisma.staff.create({ data });
  }

  async findAll() {
    return await this.prisma.staff.findMany();
  }

  async findOne(id: number) {
    const staff = await this.prisma.staff.findUnique({ where: { id } });
    if (!staff) {
      throw new NotFoundException(`Staff member with ID ${id} not found.`);
    }
    return staff;
  }

  async update(id: number, updateStaffDto: UpdateStaffDto) {
    try {
      return await this.prisma.staff.update({
        where: { id },
        data: updateStaffDto,
      });
    } catch (error) {
      throw new NotFoundException(`Staff member with ID ${id} not found.`);
    }
  }

  async remove(id: number) {
    try {
      await this.prisma.staff.delete({ where: { id } });
    } catch (error) {
      throw new NotFoundException(`Staff member with ID ${id} not found.`);
    }
  }
}
