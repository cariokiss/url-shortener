import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SitesController } from './sites.controller';
import { SitesEntity } from './sites.entity';
import { SitesService } from './sites.service';

@Module({
  imports: [TypeOrmModule.forFeature([SitesEntity])],
  controllers: [SitesController],
  providers: [SitesService],
  exports: [SitesService],
})
export class SitesModule {}
