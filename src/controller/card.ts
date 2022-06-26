import { Controller, Get, UseInterceptors , HttpStatus, Post, Body, Response, UploadedFile, Delete } from '@nestjs/common';
import { CreateCardDTO } from 'src/dto/card';
import { FileInterceptor } from '@nestjs/platform-express';
import { CardService } from 'src/service/card';

@Controller('card')
export class CardController {
    constructor(private readonly cardService: CardService) { }

    @Get()
    async getAll(@Response() res) {
        const data = await this.cardService.findAll();
        res.status(HttpStatus.OK).json(data)
    }


    @Post()
    @UseInterceptors(FileInterceptor('image'))
    async create(@Body() createUserDTO: CreateCardDTO, @UploadedFile() image: Express.Multer.File,@Response() res) {
        try {
            // image 檔案名稱修改?
            await this.cardService.create(createUserDTO);
            res.status(HttpStatus.OK).json({ status: 'success' });
        } catch (error) {
            console.error(error);
            res.status(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}