import { Module } from '@nestjs/common';
import { AuthsController } from './auth.controller';
import { RefreshTokenStrategy } from 'src/auth/strategy/refreshToken.strategy';
import { GoogleStrategy } from 'src/auth/strategy/Google/google.strategy';
import { SessionSerializer } from 'src/auth/strategy/Google/Serializer';

@Module({
  imports: [],
  controllers: [AuthsController],
  providers: [RefreshTokenStrategy, GoogleStrategy, SessionSerializer]
})
export class AuthsModule { }
