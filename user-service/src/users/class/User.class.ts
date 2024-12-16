import { PartialType } from '@nestjs/mapped-types';
import {
  IsArray,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class UserClass {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  readonly password: string;

  @IsNotEmpty()
  @IsString()
  readonly fullname: string;

  @IsNotEmpty()
  @IsString()
  readonly address: string;

  @IsOptional()
  @IsString()
  readonly image?: string;

  @IsNotEmpty()
  @IsString()
  readonly dateOfBirth: string;

  @IsOptional()
  @IsArray()
  readonly courses: Array<Object>;

  @IsOptional()
  @IsArray()
  readonly paymentsLinkId: Array<Object>;

  @IsOptional()
  @IsArray()
  readonly nodeId: Array<Object>;

  @IsOptional()
  @IsString()
  readonly providers?: string;
  // readonly role?: string;
}

export class PartialUser extends PartialType(UserClass) { }
