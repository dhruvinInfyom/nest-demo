import { Injectable } from '@nestjs/common';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Session, SessionDocument } from './entities/session.entity';
import { Model } from 'mongoose';

@Injectable()
export class SessionsService {
  constructor(
    @InjectModel(Session.name) private readonly Session: Model<SessionDocument>,
  ) {}
  create(createSessionDto: CreateSessionDto) {
    return 'This action adds a new session';
  }

  async findAll() {
    const Session = await this.Session.find();
    return Session;
  }

  findOne(id: number) {
    return `This action returns a #${id} session`;
  }

  update(id: number, updateSessionDto: UpdateSessionDto) {
    return `This action updates a #${id} session`;
  }

  remove(id: number) {
    return `This action removes a #${id} session`;
  }
}
