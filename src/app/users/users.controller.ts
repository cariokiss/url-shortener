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
    UseGuards,
  } from '@nestjs/common';
  import { CreateUserDto } from './dto/create-user.dto';
  import { UpdateUserDto } from './dto/update-user.dto';
  import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';
  
  @Controller('users')
  export class UsersController {
    constructor(private readonly usersService: UsersService) {}
  
    @Get(':id')
    @UseGuards(AuthGuard('jwt'))
    async show(@Param('id', new ParseUUIDPipe()) id: string) {
      return await this.usersService.findOneOrFailById(id);
    }
  
    @Post()
    async store(@Body() body: CreateUserDto) {
      return await this.usersService.store(body);
    }

    @Put(':id')
    @UseGuards(AuthGuard('jwt'))
    async update(
      @Param('id', new ParseUUIDPipe()) id: string,
      @Body() body: UpdateUserDto,
    ) {
      return await this.usersService.update(id, body);
    }
  
    @Delete(':id')
    @UseGuards(AuthGuard('jwt'))
    @HttpCode(HttpStatus.NO_CONTENT)
    async destroy(@Param('id', new ParseUUIDPipe()) id: string) {
      await this.usersService.destroy(id);
    }
  }
  