import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, USER_MODEL } from 'src/schemas/users.schema';
import { SoftDeleteModel } from 'mongoose-delete';
@Injectable()
export class UsersService {
constructor(
    @InjectModel(USER_MODEL)
    private readonly userModel: Model<User> & SoftDeleteModel<User>,
){}

async handleAddValue (payload:{temperature:number,humidy:number,light:number,_id:string}){
    const {_id} = payload
const user = await this.userModel.findById(_id);
    if(!user){
        return{
            message:'User not exis! '
        }
    }

}
}


