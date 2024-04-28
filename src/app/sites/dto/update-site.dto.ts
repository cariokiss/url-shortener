// update-site.dto.ts
import { IsString, IsNotEmpty, IsUUID } from 'class-validator';

export class UpdateSiteDto {
    @IsString()
    @IsNotEmpty()
    @IsUUID()
    id: string;

    @IsString()
    @IsNotEmpty()
    shortUrl: string;
}
