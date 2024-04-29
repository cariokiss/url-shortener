// update-site.dto.ts
import { IsString, IsNotEmpty, IsUUID } from 'class-validator';

export class UpdateSiteDto {

    @IsString()
    @IsNotEmpty()
    originalUrl: string;
}
