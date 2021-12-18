import { SwaggerModule } from '@nestjs/swagger';
export class CreateUserDto {
  email: string;
  password: string;
  roles: ['user'];
  isEnabled?: boolean = true;
}
