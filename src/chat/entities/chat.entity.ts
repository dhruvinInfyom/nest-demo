import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({timestamps:true})
export class Chat {
    @Prop()
    senderId: string;
    @Prop()
    receiverId: string;
    @Prop()
    preview: string;
    @Prop({time: { type: Date, default: Date.now }})
    time: Date;
}

export type ChatDocument = Chat & Document;
export const ChatSchema = SchemaFactory.createForClass(Chat);