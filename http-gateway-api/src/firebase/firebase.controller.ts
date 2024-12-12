import { Controller, Get } from '@nestjs/common';
import * as path from 'path';
@Controller('firebase')
export class FirebaseController {
    @Get()
    hello() {
        return {
            msg: path.resolve(__dirname, '../../mkadmin-fb19f-firebase-adminsdk-a23bc-6cfc5deba0.json')
        }
    }
}
