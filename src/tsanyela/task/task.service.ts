import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTaskDto, UpdateTaskDto } from './task.dto';
import { Prisma } from '@prisma/client';
import { Task } from './task.entity';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  //   async create(createTaskDto: CreateTaskDto) {
  //     const taskData = {
  //       ...createTaskDto,
  //       staff: {
  //         connect: { id: createTaskDto.staffId },
  //       },
  //     };
  //     if (typeof taskData.staffId !== 'number') {
  //       throw new Error('userId must be a string.');
  //     }
  //     return this.prisma.task.create({ data: taskData });
  //   }

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    const taskData = {
      description: createTaskDto.description,
      date: createTaskDto.date,
      status: 'Pending',
      staff: {
        connect: { id: createTaskDto.staffId },
      },
      isCompleted: createTaskDto.isCompleted,
    };

    return this.prisma.task.create({ data: taskData });
  }

  async findAll() {
    return await this.prisma.task.findMany();
  }

  async findOne(id: number) {
    const task = await this.prisma.task.findUnique({ where: { id } });
    if (!task) {
      throw new NotFoundException(`Task with ID ${id} not found.`);
    }
    return task;
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    try {
      return await this.prisma.task.update({
        where: { id },
        data: updateTaskDto,
      });
    } catch (error) {
      throw new NotFoundException(`Task with ID ${id} not found.`);
    }
  }

  async remove(id: number) {
    try {
      await this.prisma.task.delete({ where: { id } });
    } catch (error) {
      throw new NotFoundException(`Task with ID ${id} not found.`);
    }
  }
}
