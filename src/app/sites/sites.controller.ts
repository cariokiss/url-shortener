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

@Controller('sites')
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
