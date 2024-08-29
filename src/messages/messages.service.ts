import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Message, MessageDocument } from './entities/message.entity';
import { Model } from 'mongoose';

@Injectable()
export class MessagesService {
  constructor(
    @InjectModel(Message.name)
    private readonly messageModel: Model<MessageDocument>,
  ) {}
  async create(createMessageDto) {
    const { senderId, receiverId, chatId, messages } = createMessageDto;

    let existingChat = await this.messageModel.findOne({
      chatId,
      $or: [
        { senderId, receiverId },
        { senderId: receiverId, receiverId: senderId },
      ],
    });

    if (existingChat) {
      existingChat.messages.push(messages);
      await existingChat.save();
      return {
        data: existingChat,
        message: 'Message added to existing chat successfully',
        status: HttpStatus.OK,
      };
    } else {
      const newMessage = new this.messageModel(createMessageDto);
      await newMessage.save();
      return {
        data: newMessage,
        message: 'Chat created successfully',
        status: HttpStatus.CREATED,
      };
    }
  }

  findAll() {
    return `This action returns all messages`;
  }

  async findOne(id) {
    const message = await this.messageModel.findOne({ chatId: id });
    return {
      data: message,
      message: 'Chat get successfully',
      status: HttpStatus.OK,
    };
  }

  update(id: number, updateMessageDto) {
    return `This action updates a #${id} message`;
  }

  remove(id: number) {
    return `This action removes a #${id} message`;
  }
}
