import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthCredentialsDto } from './dto/user.dto';

@Controller('tsanyela/user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('create')
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() authCredentialsDto: AuthCredentialsDto) {
    return await this.userService.create(authCredentialsDto);
  }
}
