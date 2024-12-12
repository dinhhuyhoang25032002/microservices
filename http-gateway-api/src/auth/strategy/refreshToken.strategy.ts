import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { Request } from "express";
import { Injectable } from "@nestjs/common";
import { JwtPayload } from "./accessToken.strategy";

@Injectable()
export class RefreshTokenStrategy extends PassportStrategy(Strategy, 'jwt-refresh') {
    constructor() {
        super({
            jwtFromRequest:
                ExtractJwt.fromExtractors([
                    RefreshTokenStrategy.extractJWT,
                    ExtractJwt.fromAuthHeaderAsBearerToken()
                ]),
            secretOrKey: process.env.SECRET_KEY,
        });
    }

    private static extractJWT(req: Request): string | null {
        if (req.cookies && "token" in req.cookies && req.cookies.token.length > 0) {
            return req.cookies.token;
        }
        return null;
    }

    async validate(payload: JwtPayload) {
        return payload;
    }
}
