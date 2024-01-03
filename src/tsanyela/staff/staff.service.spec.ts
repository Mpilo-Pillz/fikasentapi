import { Test, TestingModule } from '@nestjs/testing';
import { StaffService } from './staff.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateStaffDto } from './staff.dto';

describe('StaffService', () => {
  let service: StaffService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const mockPrismaService = {
      staff: {
        create: jest.fn(),
        findMany: jest.fn(),
        findUnique: jest.fn(),
        update: jest.fn(),
        delete: jest.fn(),
      },
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        StaffService,
        { provide: PrismaService, useValue: mockPrismaService },
      ],
    }).compile();

    service = module.get<StaffService>(StaffService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a staff member', async () => {
      const staffDto: CreateStaffDto = {
        name: 'Linda Smith',
        userId: '1',
        staffTypeId: 1,
        role: '',
        contactNumber: '',
      };
      prismaService.staff.create.mockResolvedValue(staffDto);
      expect(await service.create(staffDto)).toEqual(staffDto);
      expect(prismaService.staff.create).toHaveBeenCalledWith({
        data: staffDto,
      });
    });
  });

  describe('findAll', () => {
    it('should return an array of staff members', async () => {
      const staffArray = [{ name: 'John Doe', userId: 1, staffTypeId: 1 }];
      prismaService.staff.findMany.mockResolvedValue(staffArray);
      expect(await service.findAll()).toEqual(staffArray);
    });
  });

  // TODO: Test findOne, update, and remove
});
