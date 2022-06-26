import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateUserDTO {
    @IsString()
    @IsNotEmpty()
    readonly image: string;

    @IsString()
    @IsNotEmpty()
    readonly product: string;

    @IsNumber()
    @IsNotEmpty()
    readonly price: number;
    
    @IsString()
    @IsNotEmpty()
    readonly introduction: string;



}