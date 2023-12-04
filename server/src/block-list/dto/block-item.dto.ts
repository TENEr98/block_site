import { ApiProperty } from '@nestjs/swagger';
import { $Enums } from '@prisma/client';

export class BlockItemDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  blockListId: number;

  @ApiProperty({
    enum: [$Enums.BlockItemType.KeyWord, $Enums.BlockItemType.Website],
  })
  type: $Enums.BlockItemType;

  @ApiProperty()
  data: string;

  @ApiProperty()
  createdAt: Date;
}
