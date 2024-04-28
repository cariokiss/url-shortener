import { Injectable, NotFoundException } from '@nestjs/common';
import { SitesEntity } from './sites.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSiteDto } from './dto/create-site.dto';
import { UpdateSiteDto } from './dto/update-site.dto';
import { UsersEntity } from '../users/users.entity';

@Injectable()
export class SitesService {
    constructor(
        @InjectRepository(SitesEntity)
        private readonly sitesRepository: Repository<SitesEntity>,
    ) {}

    generateSiteShortLink() {
      return "temp"
    }

    async findAll(user: UsersEntity) {
      console.log(user)
        return await this.sitesRepository.find({
          where: {user},
          relations: ['user']
        })
    }

    async findOneOrFailById(id: string) {
        try {
        return await this.sitesRepository.findOneOrFail({where: {id}});   
    } catch (error) {
        throw new NotFoundException(error.message);
    }
  }

  async findOneOrFailBySite(siteSaida: string) {
    try {
    const result = await this.sitesRepository.findOneOrFail({where: {siteSaida}});   
    return result.siteEntrada
} catch (error) {
    throw new NotFoundException(error.message);
}
}
  
  async store(data: CreateSiteDto, user: UsersEntity) {
    const siteToCreate = {
      ...data,
      user,
      siteSaida: this.generateSiteShortLink()
    }
    const site = this.sitesRepository.create(siteToCreate);
    return await this.sitesRepository.save(site);
  }

  async update(id: string, data: UpdateSiteDto) {
    const site = await this.findOneOrFailById(id);
    this.sitesRepository.merge(site);
    return await this.sitesRepository.save(site);
  }

  async destroy(id: string) {
    await this.sitesRepository.findOneOrFail({where: {id}});
    this.sitesRepository.softDelete(id);
  }
}
