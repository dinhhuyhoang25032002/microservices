import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, USER_MODEL } from 'src/schemas/users.schema';
import { SoftDeleteModel } from 'mongoose-delete';
import { NodeIoT, NODEIOT_MODEL } from 'src/schemas/nodeiot.schema';
@Injectable()
export class UsersService {
constructor(
    @InjectModel(USER_MODEL)
    private readonly userModel: Model<User> & SoftDeleteModel<User>,
    @InjectModel(NODEIOT_MODEL)
    private readonly nodeModel: Model<NodeIoT> & SoftDeleteModel<NodeIoT>,
){}

async handleAddValue (payload:{temperature:number,humidy:number,light:number,_id:string, nodeId:string}){
    const {_id,nodeId, temperature,light,humidy} = payload

const updateValue = {
    temperature,humidy,light
}
return await this.nodeModel.findOneAndUpdate({_id:nodeId, userId:_id},updateValue);

}

async handleGetUserInfo(userId:string){
    const user = await this.userModel.findById(userId)
    if(!user){
        return{ message:'Not found user'}
    }
    delete user.password
    return user
}
}


