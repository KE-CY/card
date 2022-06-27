import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entity/user';
import { UserService } from 'src/service/user';
import { UserController } from 'src/controller/user';
import { JwtStrategy } from 'src/service/jwtStrategy';
import { AuthModule } from './auth';

@Module({
    imports: [
        TypeOrmModule.forFeature([User]), 
        AuthModule],
    providers: [UserService, JwtStrategy],
    controllers: [UserController],
    exports: [UserService],
})
export class UserModule { }