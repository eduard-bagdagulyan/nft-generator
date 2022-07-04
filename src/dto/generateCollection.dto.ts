import { IsNotEmpty, IsArray, IsInt, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class Format {
  @IsInt()
  width: number;

  @IsInt()
  height: number;

  smoothness: string;
}

export class GenerateCollectionDto {
  id?: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  collectionSize: number;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => Format)
  format: Format;

  @IsNotEmpty()
  baseUrl: string;

  @IsNotEmpty()
  @IsArray()
  layers: [
    {
      name: string;
      rare?: number;
      items: [
        {
          name: string;
          rare?: number;
          base64: string;
          size: number;
          type: string;
        },
      ];
    },
  ];

  incompatibles?: object;

  forcedCombinations?: object;
  base64: string;
}
