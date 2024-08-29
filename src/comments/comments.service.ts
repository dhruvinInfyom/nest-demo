import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Comment, CommentDocument } from './entities/comment.entity';
import { Model, Types } from 'mongoose';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comment.name)
    private readonly commentModel: Model<CommentDocument>,
  ) {}
  create(createCommentDto: CreateCommentDto) {
    return 'This action adds a new comment';
  }

  async findAll(search, page, limit) {
    const skip = (page - 1) * limit;
    const Comment = await this.commentModel.aggregate([
      {
        $match: {
          $or: [
            { name: { $regex: search, $options: 'i' } },
            { email: { $regex: search, $options: 'i' } },
            { text: { $regex: search, $options: 'i' } },
          ],
        },
      },
      { $skip: skip },
      { $limit: limit },
    ]);
    return Comment;
  }

  async findOne(id) {
    const signlecomment = await this.commentModel.aggregate([
      { $match: { _id: new Types.ObjectId(id) } },
      {
        $lookup: {
          from: 'movies',
          localField: 'movie_id',
          foreignField: '_id',
          as: 'movies',
        },
      },
      {
        $unwind: '$movies',
      },
    ]);
    return signlecomment;
  }

  update(id: number, updateCommentDto: UpdateCommentDto) {
    return `This action updates a #${id} comment`;
  }

  remove(id: number) {
    return `This action removes a #${id} comment`;
  }
}
