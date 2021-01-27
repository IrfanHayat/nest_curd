import { Controller,Get,Post, Put,Delete, Param,Body } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import {UserService} from './user.service'

@Controller('user')//A controller's purpose is to receive specific requests for the application. 
export class UserController {
constructor(private readonly userService:UserService){} //Dependencies are services or objects that a class needs to perform its function. Dependency injection, or DI, is a design pattern in which a class requests dependencies from external sources rather than creating them

@Get('getAllUser/:id')
getAllUser(@Param('id') id:Promise<User>){
    return this.userService.getSingleUser(id);
}

@Post('createSingleUser')
createSingleUser(@Body() user:User):Promise<User>{
    return this.userService.createSingleUser(user);
}


@Put('updateSingleUser/:id')
updateSingleUser(@Param('id')id,@Body()user:User ):Promise<User>{
    return this.userService.updateSingleUser(id,user);
}

@Delete('deleteSingleUser/:id')
deleteSingleUser(@Param('id')id ):Promise<User>{
    return this.userService.deleteSingleUser(id);
}


}

