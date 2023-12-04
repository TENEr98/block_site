import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

import { BlockItemDto } from './block-item.dto';

export class BlockListDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  ownerId: number;

  @ApiProperty({ type: [BlockItemDto] })
  items: BlockItemDto[];
}

export class BlockListQueryDto {
  @ApiProperty({ required: false })
  @IsOptional()
  q?: string;
}
