import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { ApiOperation, ApiTags, ApiBody, ApiResponse } from '@nestjs/swagger';

export class LoginDto{
  email: string;
  password: string;
}

@Controller('auth')
@ApiTags('Login')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  @ApiOperation({ summary: 'Fazer login' })
  @ApiBody({ 
    description: 'Forneça um objeto contendo o email e a senha do usuário',
    type: LoginDto,
    examples: {
      example1: {
        value: { email: 'example@example.com', password: 'senha123' },
        summary: 'Exemplo de login bem-sucedido'
      }
    }
  })
  @ApiResponse({ status: 201, description: 'Login bem-sucedido' })
  @ApiResponse({ status: 401, description: 'Credenciais inválidas' })
  async login(@Req() req: any) {
    return await this.authService.login(req.user);
  }
}
