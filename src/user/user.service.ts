import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
getAllUser():string{
    return "Irfan is a user"
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
