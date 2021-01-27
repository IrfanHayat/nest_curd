import { Injectable } from '@nestjs/common';
import  {User} from './interfaces/user.interface';
import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose'; // InjectModel is use for injecting model name and this name must be same as which is use in services module 
import { UserSchema } from './schemas/user.schema';

@Injectable()  
export class UserService  {
 constructor(@InjectModel('User') private readonly userModel: Model<User>) {}


 async getSingleUser(id):Promise<User> {
    return await this.userModel.findOne({_id:id}) 
}

async createSingleUser(user):Promise<User>{
     let new_user=new this.userModel(user)
     return new_user.save();
}


async updateSingleUser(id,user):Promise<User>{
     return await this.userModel.findByIdAndUpdate(id,user,{new:true})
}

async deleteSingleUser(id):Promise<User>{
     return await this.userModel.deleteOne({_id:id})
}


}
