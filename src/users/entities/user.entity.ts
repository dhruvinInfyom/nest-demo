import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export enum UserRole {
  ADMIN = 'ADMIN',
  ASSISTANT = 'ASSISTANT',
  USER = 'USER',
}

@Schema()
export class Users extends Document {
  @Prop()
  name: string;
  @Prop({unique: true})
  email: string;
  @Prop()
  password: string;
  @Prop({default:UserRole.ADMIN, enum: UserRole, })
  role: UserRole;
}

export type UserDocument = Users & Document;
export const UserSchema = SchemaFactory.createForClass(Users);
