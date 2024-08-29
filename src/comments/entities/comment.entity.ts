import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from "mongoose"

@Schema()
export class Comment extends Document {
    @Prop()
    name:string
    @Prop()
    email:string
    @Prop()
    movie_id:string
    @Prop()
    text:string
    @Prop()
    date:string
}

export type CommentDocument = Comment & Document;
export const CommentSchema = SchemaFactory.createForClass(Comment);