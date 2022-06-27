import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/entity/user';
import { IUserCreateParams } from 'src/interafaces/user';
import { encrypt } from 'src/utils/md5';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>) { }

    async findAll(): Promise<User[]> {
        return await this.userRepository.find();
    }

    async find(username: string): Promise<boolean> {
        const check = await this.userRepository.findOne({ where: { username: username } });
        return check ? true : false;
    }

    async create(u: IUserCreateParams): Promise<User> {
        u.password = encrypt(u.password)
        return await this.userRepository.save(u);
    }

    async checkSame(u: IUserCreateParams): Promise<boolean> {
        u.password = encrypt(u.password)
        const user = await this.userRepository.findOne({ where: u });
        return user ? true : false;
    }

    async login(u: IUserCreateParams): Promise<boolean> {
        u.password = encrypt(u.password)
        const userlogin = await this.userRepository.find({ where: u });
        return userlogin ? true : false;
    }



}