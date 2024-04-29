import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SitesController } from './sites.controller';
import { SitesEntity } from './sites.entity';
import { SitesService } from './sites.service';
import { SitesPublicController } from './public.sites.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SitesEntity])],
  controllers: [SitesController, SitesPublicController],
  providers: [SitesService],
  exports: [SitesService],
})
export class SitesModule {}
