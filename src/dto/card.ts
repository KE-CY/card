import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateCardDTO {

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