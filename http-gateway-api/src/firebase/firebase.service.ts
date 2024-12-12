import { Inject, Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
@Injectable()
export class FirebaseService {
    private database: admin.database.Database;
    constructor(@Inject('FIREBASE_APP') firebaseApp: admin.app.App) {
        this.database = firebaseApp.database();
    }
    async getTemperature(date: string) {
        const ref = this.database.ref(`dailyTemperature/${date}`);
        return new Promise((resolve, reject) => {
            try {
                ref.on('value', (snapshot) => {
                    if (snapshot.exists()) {
                        console.log(snapshot.val())
                        resolve(snapshot.val());
                    } else {
                        resolve(null);
                    }
                })
            } catch (error) {
                console.error('Error fetching data:', error);
                reject(error);
            }
        });
    }
}
