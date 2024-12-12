import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { Injectable } from "@nestjs/common";

export type JwtPayload = {
    sub: string,
    email: string
}

@Injectable()
export class AccessTokenStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.SECRET_KEY,
        });
    }

    async validate(payload: JwtPayload) {
        return payload;
    }
}
