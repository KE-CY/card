import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from './user';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { AuthService } from './auth';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authService: AuthService) {
        super({
            // 這裡沒有intellisense可以用，下面這一段是說
            // 要從header取得bearer token
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            // 這裡的key就是要跟create token時的key一樣
            secretOrKey: 'iron-nest',
        });
    }
    async validate(payload) {
        const user = await this.authService.validateUser(payload);
        if (!user) throw new UnauthorizedException();
        return user
    }
}