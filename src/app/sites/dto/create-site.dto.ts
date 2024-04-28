// create-site.dto.ts
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateSiteDto {
    @IsString()
    @IsNotEmpty()
    siteEntrada: string;
    }
