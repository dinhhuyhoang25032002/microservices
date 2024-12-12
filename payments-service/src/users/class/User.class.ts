import { PartialType } from '@nestjs/mapped-types';

export class UserClass {
  readonly email: string;
  readonly password: string;
  readonly fullname: string;
  readonly address: string;
  readonly image?: string;
  readonly dateOfBirth: string;
  readonly providers?: string;
  readonly courses?: Array<Object>;
  // readonly role?: string;
}

export class PartialUser extends PartialType(UserClass) { }
