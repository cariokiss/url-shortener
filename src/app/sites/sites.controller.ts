import {
  Request,
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
import { CreateSiteDto } from './dto/create-site.dto';
import { UpdateSiteDto } from './dto/update-site.dto';
import { SitesService } from './sites.service';
import { AuthGuard } from '@nestjs/passport';
import { UsersEntity } from '../users/users.entity';

@Controller('api/v1/sites')
@UseGuards(AuthGuard('jwt'))
export class SitesController {
  constructor(private readonly sitesService: SitesService) {}

  @Get()
  async index(@Request() req) {
    return await this.sitesService.findAll(req.user);
  }

  @Post()
  async store(@Body() body: CreateSiteDto, @Request() req) {
    return await this.sitesService.store(body, req.user);
  }

  @Get(':site')
  async show(@Param('site') site: string) {
    return await this.sitesService.findOneOrFailBySite(site);
  }

  @Put(':id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() body: UpdateSiteDto,
  ) {
    return await this.sitesService.update(id, body);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async destroy(@Param('id', new ParseUUIDPipe()) id: string) {
    await this.sitesService.destroy(id);
  }
}
