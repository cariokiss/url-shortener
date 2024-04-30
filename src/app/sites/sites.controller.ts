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
  Request,
  UseGuards,
} from '@nestjs/common';
import { UpdateSiteDto } from './dto/update-site.dto';
import { SitesService } from './sites.service';
import { AuthGuard } from '@nestjs/passport';
import { CreateSiteDto } from './dto/create-site.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('sites')
@UseGuards(AuthGuard('jwt'))
@ApiTags('Sites')
export class SitesController {
  constructor(private readonly sitesService: SitesService) {}

  @Get()
  @ApiOperation({ summary: 'Listar URLs encurtadas pelo usuário' })
  @ApiResponse({ status: 200, description: 'A solicitação foi bem-sucedida' })
  @ApiResponse({ status: 401, description: 'Usuário não autorizado' })
  async index(@Request() req) {
    return await this.sitesService.findAll(req.user);
  }

  @Post()
  @ApiOperation({ summary: 'Criar URL encurtada com usuário' })
  @ApiResponse({ status: 201, description: 'URL encurtada com sucesso' })
  @ApiResponse({ status: 400, description: 'Parâmetros inválidos' })
  @ApiResponse({ status: 401, description: 'Usuário não autorizado' })
  async store(@Body() body: CreateSiteDto, @Request() req) {
    return await this.sitesService.store(body, req.user);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualizar origem da URL encurtada' })
  @ApiResponse({ status: 200, description: 'URL atualizada com sucesso' })
  @ApiResponse({ status: 400, description: 'Parâmetros inválidos / URL não encontrada' })
  @ApiResponse({ status: 401, description: 'Usuário não autorizado' })
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() body: UpdateSiteDto,
  ) {
    return await this.sitesService.update(id, body);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletar URL encurtada' })
  @ApiResponse({ status: 204, description: 'URL deletada com sucesso' })
  @ApiResponse({ status: 400, description: 'URL não encontrada' })
  @ApiResponse({ status: 401, description: 'Usuário não autorizado' })
  @HttpCode(HttpStatus.NO_CONTENT)
  async destroy(@Param('id', new ParseUUIDPipe()) id: string) {
    await this.sitesService.destroy(id);
  }
}
