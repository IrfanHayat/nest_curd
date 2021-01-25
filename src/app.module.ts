import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './user/user.module'

@Module({
  imports: [UsersModule,MongooseModule.forRoot('mongodb://localhost:27017/nestcurd')],
  controllers: [AppController],
  providers: [AppService],//The main idea of a provider is that it can inject dependencies; this means objects can create various relationships with each other, and the function of "wiring up" instances of objects can largely be delegated to the Nest runtime system
})
export class AppModule {}
