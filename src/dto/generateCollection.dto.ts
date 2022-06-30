import { IsNotEmpty, IsArray } from 'class-validator';

export class GenerateCollectionDto {
  id?: string;

  @IsNotEmpty()
  name: string;

  // @IsNotEmpty()
  description: string;

  // @IsNotEmpty()
  collectionSize: number;

  // @IsNotEmpty()
  format: { white: number; height: number };

  // @IsNotEmpty()
  baseUrl: string;

  // @IsNotEmpty()
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
}
