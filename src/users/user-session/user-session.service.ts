import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SessionService } from 'src/sessions/session/session.service';
import { Not, Repository } from 'typeorm';
import {
  Session,
  SessionStatus,
} from '~/sessions/session/entities/session.entity';
import { BaseService } from '~/utils/base.service';
import { UserService } from '../user/user.service';
import { CreateUserSessionDto } from './dto/create-user-session.dto';
import { UpdateUserSessionDto } from './dto/update-user-session.dto';

@Injectable()
export class UserSessionService extends BaseService<
  Session,
  CreateUserSessionDto,
  UpdateUserSessionDto
> {
  constructor(
    @InjectRepository(Session)
    private readonly repo: Repository<Session>,
    public readonly userService: UserService,
  ) {
    super(repo);
  }

  async join(userId: number, id: number) {
    const session = await this.findOneOrFail({
      where: { id, masterId: Not(userId) },
      relations: ['players'],
    });
    const user = await this.userService.findOneByOrFail({ id: userId });
    const userAlreadyJoined = session.players.find(
      (player) => player.id === user.id,
    );
    if (userAlreadyJoined) {
      throw new ConflictException('User already joined');
    }
    session.players.push(user);
    return this.save(session);
  }
  async leave(userId: number, id: number) {
    const session = await this.findOneOrFail({
      where: { id },
      relations: ['players'],
    });
    session.players = session.players.filter((player) => player.id !== userId);
    return this.save(session);
  }

  async start(userId: number, id: number) {
    const session = await this.findOneOrFail({
      where: { id, masterId: userId },
    });
    session.status = SessionStatus.ONLINE;
    return this.update(session.id, session);
  }
  async end(userId: number, id: number) {
    const session = await this.findOneOrFail({
      where: { id, masterId: userId },
    });
    session.status = SessionStatus.OFFLINE;
    return this.update(session.id, session);
  }
}
