import { Controller, Get, Param, HttpStatus, Post, Body, Response, Patch, Delete } from '@nestjs/common';
import { CreateUserDTO } from 'src/dto/user';
import { AuthService } from 'src/service/auth';
import { UserService } from 'src/service/user';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService,
        private readonly authService: AuthService) { }

    @Get()
    async getAll(@Response() res) {
        const data = await this.userService.findAll();
        res.status(HttpStatus.OK).json(data)
    }


    @Post()
    async create(@Body() createUserDTO: CreateUserDTO, @Response() res) {
        try {
            await this.userService.create(createUserDTO);
            res.status(HttpStatus.OK).json({ status: 'success' });
        } catch (error) {
            console.error(error);
            res.status(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Post('/login')
    async login(@Body() createUserDTO: CreateUserDTO, @Response() res) {
        try {
            const checkUser = await this.userService.login(createUserDTO);
            if (!checkUser) {
                res.status(HttpStatus.NOT_FOUND);
            }
            const token = await this.authService.createToken(createUserDTO.username)
            res.status(HttpStatus.OK).json(token);
        } catch (error) {
            console.error(error);
            res.status(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}