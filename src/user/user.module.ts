import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';

import { UserController } from './user.controller';
import {UserSchema} from './schemas/user.schema';
import { UserService } from './user.service';

@Module({
  imports: [MongooseModule.forFeature([{name:'User', schema:UserSchema}])],
  controllers: [UserController],
  providers: [UserService],//The main idea of a provider is that it can inject dependencies; this means objects can create various relationships with each other, and the function of "wiring up" instances of objects can largely be delegated to the Nest runtime system
})
export class UsersModule {}
