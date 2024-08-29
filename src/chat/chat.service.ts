import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Chat, ChatDocument } from './entities/chat.entity';
import { Model } from 'mongoose';

@Injectable()
export class ChatService {
  constructor(
    @InjectModel(Chat.name) private readonly chatModel: Model<ChatDocument>,
  ) {}
  async create(createChatDto) {
    const { senderId, receiverId } = createChatDto;

    const existingChat = await this.chatModel.findOne({
      $or: [
        { senderId, receiverId },
        { senderId: receiverId, receiverId: senderId },
      ],
    });

    if (existingChat) {
      return {
        data: existingChat,
        message: 'Chat between these users already exists',
        status: HttpStatus.CONFLICT,
      };
    }
    const chat = await this.chatModel.create(createChatDto);
    await chat.save();
    return {
      data: chat,
      message: 'Chat created successfully',
      status: HttpStatus.CREATED,
    };
  }

  async findAll() {
    try {
      const UserList = await this.chatModel.aggregate([
        {
          $addFields: {
            senderId: { $toObjectId: '$senderId' },
            receiverId: { $toObjectId: '$receiverId' },
          },
        },
        {
          $lookup: {
            from: 'users',
            localField: 'senderId',
            foreignField: '_id',
            as: 'sender',
          },
        },
        {
          $unwind: '$sender',
        },
        {
          $lookup: {
            from: 'users',
            localField: 'receiverId',
            foreignField: '_id',
            as: 'receiver',
          },
        },
        {
          $unwind: '$receiver',
        },
        {
          $project: {
            _id: 1,
            preview: 1,
            createdAt: 1,
            updatedAt: 1,
            sender: {
              _id: 1,
              name: 1,
              email: 1,
              profile: 1,
            },
            receiver: {
              _id: 1,
              name: 1,
              email: 1,
              profile: 1,
            },
          },
        },
      ]);
      return UserList;
    } catch (err) {
      console.log(err);
    }
  }

  findOne(id) {
    return `This action returns a #${id} chat`;
  }

  update(id, updateChatDto) {
    return `This action updates a #${id} chat`;
  }

  remove(id) {
    return `This action removes a #${id} chat`;
  }
}
