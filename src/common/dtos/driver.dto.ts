import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateDriverDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  licenseType: string;

  @IsBoolean()
  availability: boolean;
}
