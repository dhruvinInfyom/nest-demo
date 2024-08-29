import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from "mongoose";

@Schema()
export class Session extends Document {
    @Prop()
    user_id: string;
    @Prop()
    jwt: string;
}


export type SessionDocument = Session & Document;
export const SessionSchema = SchemaFactory.createForClass(Session);