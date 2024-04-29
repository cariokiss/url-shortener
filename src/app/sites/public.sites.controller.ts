import {
  Request,
  Body,
  Controller,
  Post,
  Get,
  Param,
} from '@nestjs/common';
import { CreateSiteDto } from './dto/create-site.dto';
import { SitesService } from './sites.service';

@Controller('')
export class SitesPublicController {
  constructor(private readonly sitesService: SitesService) {}

  @Post()
  async store(@Body() body: CreateSiteDto, @Request() req) {
    return await this.sitesService.store(body, req.user);
  }

  @Get(':site')
  async show(@Param('site') site: string) {
    return await this.sitesService.findOneOrFailBySite(site);
  }
}
