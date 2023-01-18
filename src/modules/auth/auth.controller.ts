import { Controller, Req, Post, UseGuards } from '@nestjs/common';

import { Request } from 'express';

import { LocalAuthGuard } from './guards';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  login(@Req() req: Request) {
    return this.authService.login(req.user);
  }
}
