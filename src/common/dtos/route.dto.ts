import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateRouteDto {
  @IsNotEmpty()
  @IsString()
  startLocation: string;

  @IsNotEmpty()
  @IsString()
  endLocation: string;

  @IsNumber()
  distance: number;

  @IsNumber()
  estimatedTime: number;
}
