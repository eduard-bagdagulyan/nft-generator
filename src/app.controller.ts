import {
  Body,
  Controller,
  Get,
  Post,
  UploadedFiles,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AppService } from './app.service';
import { GenerateCollectionDto } from './dto/generateCollection.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import { diskStorage } from 'multer';
import { mkdir } from 'fs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UsePipes(new ValidationPipe())
  generateCollection(
    @Body() generateCollectionDto: GenerateCollectionDto,
  ): Promise<any> {
    return this.appService.generateCollection(generateCollectionDto);
  }

  @Post('upload')
  @UseInterceptors(
    FilesInterceptor('files', Infinity, {
      limits: {
        fileSize: 2 * 1024 * 1024,
      },
      storage: diskStorage({
        destination: (req, file, callback) => {
          const dirName = './layers_' + req.headers.timestamp;
          mkdir(dirName, () => {
            callback(null, dirName);
          });
        },
        filename: (req, file, callback) => {
          callback(null, file.originalname);
        },
      }),
    }),
  )
  uploadFiles(@UploadedFiles() files: Array<Express.Multer.File>) {
    return 'uploaded successfully';
  }
}
