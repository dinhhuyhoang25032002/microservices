
import { Inject, Injectable } from "@nestjs/common";
import { PassportSerializer } from "@nestjs/passport";
import { UserClass } from 'src/users/class/User.class';
import { ClientProxy } from "@nestjs/microservices";
import { firstValueFrom } from 'rxjs';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(
    @Inject('NATS_SERVICE') private natsClient: ClientProxy
  ) {
    super();
  }
  serializeUser(user: UserClass, done: Function) {
    done(null, user);
  }

  async deserializeUser(payload: any, done: Function) {
    const user = await firstValueFrom(this.natsClient.send('findUser', payload.email));
    return user ? done(null, user) : done(null, null);
  }
}