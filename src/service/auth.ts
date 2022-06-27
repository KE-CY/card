import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from './user';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService,
        private readonly userService: UserService,
        ) { }

    async createToken(username: string) {
        const user = { username };
        const expiration = 60 * 60;
        const signOptions: jwt.SignOptions = { keyid: 'iron-nest', expiresIn: expiration };
        const accessToken = this.jwtService.sign(user, signOptions)
        return { expiration, accessToken };
    }

    async validateUser(payload) {
        // jwt decoded後會得到上面的user object
        const user = await this.userService.find(payload.username);
        return user;
    }
}