import { Injectable } from '@nestjs/common';
import  {User} from './interfaces/user.interface';
import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';

@Injectable()  
export class UserService  {
 constructor(@InjectModel('User') private readonly userModel: Model<User>) {}


 async getSingleUser(id:string):Promise<User> {
    return await this.userModel.findOne({_id:id}) 
}

createSingleUser():string{
    return 'Create Single User'
}

updateSingleUser():string{
    return 'Update Single User'
}

deleteSingleUser():string{
    return 'Delete Single User'
}




}
