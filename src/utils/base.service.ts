import { ConflictException, NotFoundException } from '@nestjs/common';
import {
  DeepPartial,
  FindManyOptions,
  FindOneOptions,
  FindOptionsWhere,
  Repository,
  ObjectID,
  SaveOptions,
} from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { EntityDeletedResponse } from './responses';

export class BaseService<Entity, CreateDto, UpdateDto> {
  constructor(private readonly __repo: Repository<Entity>) {}

  findAll(options?: FindManyOptions<Entity>): Promise<Entity[]> {
    return this.__repo.find(options);
  }

  findAllBy(
    where: FindOptionsWhere<Entity> | FindOptionsWhere<Entity>[],
  ): Promise<Entity[]> {
    return this.__repo.findBy(where);
  }
  findAllAndCount(
    options?: FindManyOptions<Entity>,
  ): Promise<[Entity[], number]> {
    return this.__repo.findAndCount(options);
  }

  findAllAndCountBy(
    where: FindOptionsWhere<Entity> | FindOptionsWhere<Entity>[],
  ): Promise<[Entity[], number]> {
    return this.__repo.findAndCountBy(where);
  }

  findOne(options: FindOneOptions<Entity>): Promise<Entity | null> {
    return this.__repo.findOne(options);
  }

  findOneBy(
    where: FindOptionsWhere<Entity> | FindOptionsWhere<Entity>[],
  ): Promise<Entity | null> {
    return this.__repo.findOneBy(where);
  }

  async findOneOrFail(options: FindOneOptions<Entity>): Promise<Entity> {
    const entity = await this.findOne(options);
    if (!entity) {
      throw new NotFoundException(this.__repo.metadata.name);
    }
    return entity;
  }

  async findOneByOrFail(
    where: FindOptionsWhere<Entity> | FindOptionsWhere<Entity>[],
  ): Promise<Entity> {
    const entity = await this.__repo.findOneBy(where);
    if (!entity) {
      throw new NotFoundException(this.__repo.metadata.name);
    }
    return entity;
  }

  async findOneAndFail(
    options: FindOneOptions<Entity>,
    message?: string,
  ): Promise<Entity> {
    const entity = await this.findOne(options);
    if (entity) {
      throw new ConflictException(
        message || `${this.__repo.metadata.name} entity already exists.`,
      );
    }
    return entity;
  }

  async findOneByAndFail(
    where: FindOptionsWhere<Entity> | FindOptionsWhere<Entity>[],
    message?: string,
  ): Promise<Entity> {
    const entity = await this.findOneBy(where);
    if (entity) {
      throw new ConflictException(
        message || `${this.__repo.metadata.name} entity already exists.`,
      );
    }
    return entity;
  }

  create<T extends DeepPartial<Entity>>(
    entity: T | CreateDto,
    options?: SaveOptions & {
      reload: false;
    },
  ): Promise<T> {
    const data = this.__repo.create(entity as T);
    return this.__repo.save(data as T, options);
  }

  async delete(
    criteria:
      | string
      | string[]
      | number
      | number[]
      | Date
      | Date[]
      | ObjectID
      | ObjectID[]
      | FindOptionsWhere<Entity>,
  ): Promise<EntityDeletedResponse> {
    const result = await this.__repo.delete(criteria);
    if (result.affected === 0) {
      throw new NotFoundException(this.__repo.metadata.name);
    }
    return new EntityDeletedResponse(
      this.__repo.metadata.name,
      result.affected,
      criteria as string,
    );
  }

  async update(
    criteria:
      | string
      | string[]
      | number
      | number[]
      | Date
      | Date[]
      | ObjectID
      | ObjectID[]
      | FindOptionsWhere<Entity>,
    partialEntity: QueryDeepPartialEntity<Entity> | UpdateDto,
  ): Promise<EntityDeletedResponse> {
    const result = await this.__repo.update(criteria, partialEntity);
    if (result.affected === 0) {
      throw new NotFoundException(this.__repo.metadata.name);
    }
    return new EntityDeletedResponse(
      this.__repo.metadata.name,
      result.affected,
      criteria as string,
    );
  }
}
