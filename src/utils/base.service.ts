import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Entity, Repository } from 'typeorm';

@Injectable()
export class BaseService<Entity> {
  constructor(
    @InjectRepository(Entity)
    private readonly r_repo: Repository<Entity>,
  ) {}

  create(dto: any) {
    const data = this.r_repo.create(dto as DeepPartial<Entity>);
    const entity: Promise<Entity> = this.r_repo.save(data as any);
    return entity;
  }

  findAll() {
    const entities = this.r_repo.findAndCount();
    return entities;
  }

  findOne(id: number) {
    const entity = this.r_repo.findOne(id);
    return entity;
  }

  update(id: number, dto: any) {
    const result = this.r_repo.update(id, dto);
    return result;
  }

  remove(id: number) {
    const result = this.r_repo.delete(id);
    return result;
  }
}
