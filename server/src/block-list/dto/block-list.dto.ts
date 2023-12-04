import { ApiProperty } from '@nestjs/swagger';
import { BlockItemDto } from './block-item.dto';

export class BlockListDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  ownerId: number;

  @ApiProperty({ type: [BlockItemDto] })
  items: BlockItemDto[];
}
