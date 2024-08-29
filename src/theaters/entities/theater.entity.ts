import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from "mongoose";

@Schema()
export class Theater extends Document {
    @Prop()
    theaterId:number
    @Prop({
        type: {
          address: {
            type: {
              street1: { type: String },
              city: { type: String },
              state: { type: String },
              zipcode: { type: String },
            },
          },
          geo: {
            type: {
              type: { type: String },
              coordinates: { type: [Number] },
            },
          },
        },
      })
      location: {
        address: {
          street1: string;
          city: string;
          state: string;
          zipcode: string;
        };
        geo: {
          type: string;
          coordinates: number[];
        };
      };
    }

export type TheaterDocument = Theater & Document;
export const TheaterSchema = SchemaFactory.createForClass(Theater);