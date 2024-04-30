import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateSiteDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    originalUrl: string;
    }
