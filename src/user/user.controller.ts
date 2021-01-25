import { Controller,Get,Post, Put,Delete } from '@nestjs/common';
import {UserService} from './user.service'

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

@Put('updateSingleUser')
updateSingleUser():string{
    return 'Update Single User'
}

@Delete('updateSingleUser')
deleteSingleUser():string{
    return 'Delete Single User'
}

}
