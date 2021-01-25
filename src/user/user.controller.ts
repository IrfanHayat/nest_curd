import { Controller,Get,Post } from '@nestjs/common';

@Controller('user')//A controller's purpose is to receive specific requests for the application. 
export class UserController {

@Get('getAllUser')
getAllUser():string{
    return "Irfan is a user"
}

@Post('createSingleUser')
createSingleUser():string{
    return 'Create Single User'
}



}
