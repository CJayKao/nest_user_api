import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity'
@Module({
  imports: [
    UserModule,
    SequelizeModule.forRootAsync({
      useFactory: () => {
        return {
          dialect: 'postgres',
          host: 'localhost',
          port: 5432,
          username: 'user',
          password: 'postgres',
          database: 'user',
          synchronize: true,
          // sync: {
          //   alter: {
          //     drop: false,
          //   },
          // },
          sync: {
            alter: true,
          },
          autoLoadModels: true,
          pool: {
            max: 10,
            min: 0,
            idle: 20000,
          },
          models: [User],
        };
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
