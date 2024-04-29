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

    generateSiteShortLink(): string {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const alphanumericCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const alphanumericLength = alphanumericCharacters.length;
      let result = '';
      for (let i = 0; i < 6; i++) { // Gerar uma string de 6 caracteres
       const randomIndex = Math.floor(Math.random() * alphanumericLength);
       result += alphanumericCharacters.charAt(randomIndex);
  }
  return result;
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

  async findOneOrFailBySite(shortenedUrl: string) {
    try {
    const site = await this.sitesRepository.findOneOrFail({where: {shortenedUrl}});   
    if (site) {
      site.views += 1; // Incrementa o contador de visualizações
      console.log(site)
      await this.sitesRepository.save(site);
  }
    return site.originalUrl
} catch (error) {
    throw new NotFoundException(error.message);
}
}
  
  async store(data: CreateSiteDto, user: UsersEntity) {
    const siteToCreate = {
      ...data,
      user,
      shortenedUrl: this.generateSiteShortLink()
    }
    const site = this.sitesRepository.create(siteToCreate);
    return await this.sitesRepository.save(site);
  }

  async update(id: string, data: UpdateSiteDto) {
    const site = await this.findOneOrFailById(id);
    site.originalUrl = data.originalUrl;
    await this.sitesRepository.save(site);
    return site;
  }

  async destroy(id: string) {
    await this.sitesRepository.findOneOrFail({where: {id}});
    this.sitesRepository.softDelete(id);
  }
}
