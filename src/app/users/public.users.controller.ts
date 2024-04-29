import {
    Body,
    Controller,
    Get,
    Post,
  } from '@nestjs/common';
  import { CreateUserDto } from './dto/create-user.dto';
  import { UsersService } from './users.service';
  
  @Controller('api/v1/public/users')
  export class UsersPublicController {
    constructor(private readonly usersService: UsersService) {}
  
  }
  