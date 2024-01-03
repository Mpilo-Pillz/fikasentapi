import { Test, TestingModule } from '@nestjs/testing';
import { StaffController } from './staff.controller';
import { StaffService } from './staff.service';
import { CreateStaffDto } from './staff.dto';

describe('StaffController', () => {
  let controller: StaffController;
  let service: StaffService;

  beforeEach(async () => {
    const mockStaffService = {
      create: jest.fn(),
      findAll: jest.fn(),
      findOne: jest.fn(),
      update: jest.fn(),
      remove: jest.fn(),
    } as jest.Mocked<any>;

    const module: TestingModule = await Test.createTestingModule({
      controllers: [StaffController],
      providers: [{ provide: StaffService, useValue: mockStaffService }],
    }).compile();

    controller = module.get<StaffController>(StaffController);
    service = module.get<StaffService>(StaffService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a staff member', async () => {
      const createStaffDto: CreateStaffDto = {
        name: 'John Doe',
        userId: '1',
        staffTypeId: 1,
        role: '',
        contactNumber: '',
      };
      const result = { id: 1, ...createStaffDto };

      // service.create.mockResolvedValue(result);
      expect(await controller.create(createStaffDto)).toEqual(result);
      expect(service.create).toHaveBeenCalledWith(createStaffDto);
    });
  });

  describe('findAll', () => {
    it('should return an array of staff members', async () => {
      const staffArray = [
        { id: 1, name: 'John Doe', userId: 1, staffTypeId: 1 },
      ];
      // service.findAll.mockResolvedValue(staffArray);
      expect(await controller.findAll()).toEqual(staffArray);
    });
  });

  // TODO: add tests for findOne, update, and remove
});
