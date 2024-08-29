import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Movie {
  @Prop()
  plot: string;

  @Prop({ type: [String] }) 
  genres: string[];

  @Prop()
  runtime: number;

  @Prop({ type: [String] }) 
  cast: string[];

  @Prop()
  num_mflix_comments: number;

  @Prop()
  poster: string;

  @Prop()
  title: string;

  @Prop()
  fullplot: string;

  @Prop({ type: [String] })
  languages: string[];

  @Prop()
  released: Date;

  @Prop({ type: [String] })
  directors: string[];

  @Prop({ type: [String] })
  writers: string[];

  @Prop()
  lastupdated: string;

  @Prop()
  year: number;

  @Prop({
    type: {
      wins: Number,
      nominations: Number,
      text: String,
    },
  })
  awards: {
    wins: number;
    nominations: number;
    text: string;
  };

  @Prop({
    type: {
      rating: Number,
      votes: Number,
      id: Number,
    },
  })
  imdb: {
    rating: number;
    votes: number;
    id: number;
  };

  @Prop({ type: [String] })
  countries: string[];

  @Prop()
  type: string;

  @Prop({
    type: {
      viewer: {
        rating: Number,
        numReviews: Number,
        meter: Number,
      },
      fresh: Number,
      critic: {
        rating: Number,
        numReviews: Number,
        meter: Number,
      },
      rotten: Number,
      lastUpdated: Date,
    },
  })
  tomatoes: {
    viewer: {
      rating: number;
      numReviews: number;
      meter: number;
    };
    fresh: number;
    critic: {
      rating: number;
      numReviews: number;
      meter: number;
    };
    rotten: number;
    lastUpdated: Date;
  };

  @Prop({ type: [String] })
  plot_embedding: string[];
}

export type MovieDocument = Movie & Document;
export const MovieSchema = SchemaFactory.createForClass(Movie);
