import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, Matches } from 'class-validator';
import { MessagesHelper } from 'src/helpers/messages.helper';
import { RegExHelper } from 'src/helpers/regex.helpers';

export class CreateUserDto {
    @IsNotEmpty()
    @ApiProperty()
    firstName: string;
  
    @IsNotEmpty()
    @ApiProperty()
    lastName: string;
  
    @IsNotEmpty()
    @IsEmail()
    @ApiProperty()
    email: string;
  
    @IsNotEmpty()
    @Matches(RegExHelper.password, {
        message: MessagesHelper.PASSWORD_VALID,
    })
    @ApiProperty()
    password: string;
  }