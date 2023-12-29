import {
  Controller,
  Post,
  UnauthorizedException,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';

@Controller('tsanyela/auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private jwtService: JwtService,
  ) {}

  @Post('login')
  async login(@Request() req) {
    // Validate user credentials
    const user = await this.authService.validateUser(
      req.body.email,
      req.body.password,
    );
    if (!user) {
      throw new UnauthorizedException();
    }
    // If valid, generate JWT
    const payload = { email: user.email, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
