import { ApiProperty } from '@nestjs/swagger';

export class EntityDeletedResponse {
  @ApiProperty({ type: 'string' })
  public message:
    | `Successfully deleted '${string}' ${string} entity.`
    | `Successfully deleted ${string} entities.`;
  @ApiProperty()
  public affected: number;

  constructor(entity: string, affected: number, id?: string | number) {
    this.affected = affected;
    if (affected > 1) {
      this.message = `Successfully deleted ${entity} entities.`;
    } else {
      this.message = `Successfully deleted '${id}' ${entity} entity.`;
    }
  }
}

export class EntityUpdatedResponse {
  @ApiProperty({ type: 'string' })
  public message:
    | `Successfully updated '${string}' ${string} entity.`
    | `Successfully updated ${string} entities.`;
  @ApiProperty()
  public affected: number;

  constructor(entity: string, affected: number, id?: string | number) {
    this.affected = affected;
    if (affected > 1) {
      this.message = `Successfully updated ${entity} entities.`;
    } else {
      this.message = `Successfully updated '${id}' ${entity} entity.`;
    }
  }
}
