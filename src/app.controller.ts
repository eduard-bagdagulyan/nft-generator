import {
  Body,
  Controller,
  Get,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AppService } from './app.service';
import { GenerateCollectionDto } from './dto/generateCollection.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UsePipes(new ValidationPipe())
  generateCollection(
    @Body() generateCollectionDto: GenerateCollectionDto,
  ): string {
    return this.appService.generateCollection(generateCollectionDto);
  }
}
