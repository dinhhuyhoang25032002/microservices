import { Module, Global } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { FirebaseService } from './firebase.service';
import { FirebaseController } from './firebase.controller';
import * as path from 'path';

@Module({
    imports: [],
    providers: [
        FirebaseService,
        {
            provide: 'FIREBASE_APP',
            useFactory: () => {
                return admin.initializeApp({
                    credential: admin.credential.cert(path.resolve(__dirname, '../../mkadmin-fb19f-firebase-adminsdk-a23bc-6cfc5deba0.json')),
                    databaseURL: "https://mkadmin-fb19f-default-rtdb.firebaseio.com"
                });
            },
        },
    ],
    exports: ['FIREBASE_APP', FirebaseService],
    controllers: [FirebaseController],
})
export class FirebaseModule { }
