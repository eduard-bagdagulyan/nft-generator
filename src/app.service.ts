import { Injectable } from '@nestjs/common';
import { generateCollection } from 'art-engine/src/main';
import * as config from 'art-engine/src/config';
import { GenerateCollectionDto } from './dto/generateCollection.dto';

@Injectable()
export class AppService {
  generateCollection(body: GenerateCollectionDto): any {
    const newConfig = Object.assign(config, body);
    generateCollection(newConfig);
    return 'Success!';
  }
}
