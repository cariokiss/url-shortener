import {
  Request,
  Body,
  Controller,
  Post,
  Get,
  Param,
  Res,
} from '@nestjs/common';
import { CreateSiteDto } from './dto/create-site.dto';
import { SitesService } from './sites.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';

@Controller('')
@ApiTags('Public Sites')
export class SitesPublicController {
  constructor(private readonly sitesService: SitesService) {}

  @Post()
  @ApiOperation({ summary: 'Criar URL encurtada anonimamente' })
  @ApiResponse({ status: 201, description: 'URL encurtada com sucesso' })
  @ApiResponse({ status: 400, description: 'Parâmetros inválidos' })
  async store(@Body() body: CreateSiteDto, @Request() req) {
    return await this.sitesService.store(body, req.user);
  }

  @Get(':site')
  @ApiOperation({ summary: 'Ir para site através da URL encurtada' })
  @ApiResponse({ status: 404, description: 'URL não encontrada' })
  async show(@Param('site') site: string, @Res() res: Response) {
    const result = await this.sitesService.findOneOrFailBySite(site);
    res.redirect(result)
  }
}
