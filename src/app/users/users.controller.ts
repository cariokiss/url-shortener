import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpStatus,
    Param,
    ParseUUIDPipe,
    Post,
    Put,
    UseGuards,
  } from '@nestjs/common';
  import { CreateUserDto } from './dto/create-user.dto';
  import { UpdateUserDto } from './dto/update-user.dto';
  import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation, ApiProperty, ApiResponse, ApiTags } from '@nestjs/swagger';
  
  @Controller('users')
  @ApiTags('Users')
  export class UsersController {
    constructor(private readonly usersService: UsersService) {}
  
    @Get(':id')
    @UseGuards(AuthGuard('jwt'))
    @ApiOperation({ summary: 'Listar todas as informações do usuário' })
    @ApiResponse({ status: 200, description: 'A solicitação foi bem-sucedida' })
    @ApiResponse({ status: 401, description: 'Usuário não autorizado' })
    @ApiProperty()
    async show(@Param('id', new ParseUUIDPipe()) id: string) {
      return await this.usersService.findOneOrFailById(id);
    }
  
    @Post()
    @ApiOperation({ summary: 'Criar usuário' })
    @ApiResponse({ status: 201, description: 'Usuário criado com sucesso' })
    @ApiResponse({ status: 400, description: 'Parâmetros inválidos' })
    @ApiProperty()
    async store(@Body() body: CreateUserDto) {
      return await this.usersService.store(body);
    }

    @Put(':id')
    @UseGuards(AuthGuard('jwt'))
    @ApiOperation({ summary: 'Atualizar nome do usuário' })
    @ApiResponse({ status: 200, description: 'Usuário atualizado com sucesso' })
    @ApiResponse({ status: 400, description: 'Parâmetros inválidos / Usuário não encontrado' })
    @ApiResponse({ status: 401, description: 'Usuário não autorizado' })
    @ApiProperty()
    async update(
      @Param('id', new ParseUUIDPipe()) id: string,
      @Body() body: UpdateUserDto,
    ) {
      return await this.usersService.update(id, body);
    }
  
    @Delete(':id')
    @UseGuards(AuthGuard('jwt'))
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiOperation({ summary: 'Deletar usuário' })
    @ApiResponse({ status: 204, description: 'Usuário deletado com sucesso' })
    @ApiResponse({ status: 400, description: 'Usuário não encontrado' })
    @ApiResponse({ status: 401, description: 'Usuário não autorizado' })
    @ApiProperty()
    async destroy(@Param('id', new ParseUUIDPipe()) id: string) {
      await this.usersService.destroy(id);
    }
  }
  