import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateUserDTO {
    @IsString()
    @IsNotEmpty()
    readonly username: string;

    @IsString()
    @IsNotEmpty()
    readonly password: string;

}