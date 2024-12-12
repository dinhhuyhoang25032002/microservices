import { PassportStrategy } from "@nestjs/passport";
import { Profile, Strategy } from 'passport-google-oauth20';
import { Injectable } from "@nestjs/common";

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super(
            {
                clientID: process.env.CLIENT_AUTH_GOOGLE_ID,
                clientSecret: process.env.CLIENT_AUTH_GOOGLE_SECRET,
                callbackURL: 'https://localhost:3001/auth/google/redirect',
                scope: ['profile', 'email'],
            },
        );
    }

    async validate(accessToken: string, refreshToken: string, profile: Profile) {
        const user = {
            fullname: `${profile?.name?.familyName} ${profile?.name?.givenName}`,
            image: profile?._json.picture,
            email: profile?._json.email,
            provider: profile?.provider,
            role: 'user'
        }
        return user || null;
    }
}