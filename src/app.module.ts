import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Card } from './entity/card';
import { User } from './entity/user';
import { UserModule } from './module/user';
import { CardModule } from './module/card';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'test',
    password: 'test',
    database: 'card',
    autoLoadEntities: true,
    entities: [User, Card],
    synchronize: true,
  }),
    UserModule, CardModule, AppModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
