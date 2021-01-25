import { Controller,Get,Post, Put,Delete } from '@nestjs/common';
import {UserService} from './user.service'

@Controller('user')//A controller's purpose is to receive specific requests for the application. 
export class UserController {
constructor(private readonly userService:UserService){} //Dependencies are services or objects that a class needs to perform its function. Dependency injection, or DI, is a design pattern in which a class requests dependencies from external sources rather than creating them

@Get('getAllUser')
getAllUser(id:string){
    return this.userService.getSingleUser(id);
}

@Post('createSingleUser')
createSingleUser():string{
    return this.userService.createSingleUser();
}

@Put('updateSingleUser')
updateSingleUser():string{
    return this.userService.updateSingleUser();
}

@Delete('updateSingleUser')
deleteSingleUser():string{
    return this.userService.deleteSingleUser();
}

}
