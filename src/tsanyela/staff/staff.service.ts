import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateStaffDto, UpdateStaffDto } from './staff.dto';

@Injectable()
export class StaffService {
  constructor(private prisma: PrismaService) {}

  async create(createStaffDto: CreateStaffDto) {
    return await this.prisma.staff.create({ data: createStaffDto });
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
