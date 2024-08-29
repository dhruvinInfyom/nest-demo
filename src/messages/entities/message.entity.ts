import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema({ timestamps: true })
export class Message {
  @Prop({ type: Types.ObjectId, required: true, ref: 'User' })
  senderId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, required: true, ref: 'User' })
  receiverId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, required: true, ref: 'Chat' })
  chatId: Types.ObjectId;
  @Prop({
    type: [
      {
        text: { type: String, required: true },
        timestamp: { type: Date, default: Date.now },
        senderId: { type: Types.ObjectId, required: true, ref: 'User' },
        receiverId: { type: Types.ObjectId, required: true, ref: 'User' },
        chatId: { type: Types.ObjectId, required: true, ref: 'Chat' },
        isRead: { type: Boolean, default: false },
      },
    ],
  })
  messages: Array<{
    text: string;
    timestamp: Date;
    senderId: Types.ObjectId;
    receiverId: Types.ObjectId;
    chatId: Types.ObjectId;
    isRead: boolean;
  }>;
}

export type MessageDocument = Message & Document;
export const MessageSchema = SchemaFactory.createForClass(Message);
