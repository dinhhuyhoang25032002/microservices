import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfixCors } from 'src/util/cors-config';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
import * as fs from 'fs';
import * as session from 'express-session';

const httpsOptions = {
  key: fs.readFileSync('tinamys.com+4-key.pem'),
  cert: fs.readFileSync('tinamys.com+4.pem'),
};
async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: ConfixCors,
    bodyParser: true,
    httpsOptions
  });
  const PORT = 3001
  app.use(cookieParser());
  app.use(
    session({
      secret: process.env.SECRET_KEY,
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 60 * 60 * 24 * 7,
      },
    }),
  );
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  await app.listen(PORT, () => {
    console.log(`Running on PORT: ${PORT}`);
  });
 
}
bootstrap();
