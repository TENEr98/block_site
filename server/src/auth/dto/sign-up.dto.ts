import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class SignUpDto {
  @IsEmail()
  @ApiProperty({ example: 'test@gmail.com' })
  email: string;

  @IsNotEmpty()
  @ApiProperty({ example: '1234' })
  password: string;
}
