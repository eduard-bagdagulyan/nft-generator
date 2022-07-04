import { Injectable } from '@nestjs/common';
import { generateCollection } from 'art-engine/src/main';
import * as config from 'art-engine/src/config';
import { GenerateCollectionDto } from './dto/generateCollection.dto';
import { readFileSync, writeFileSync } from 'fs';

@Injectable()
export class AppService {
  async generateCollection(body: GenerateCollectionDto): Promise<any> {
    const newConfig = Object.assign(config, body);
    // const storedGenomes = JSON.parse(
    //   readFileSync('build_1/_dna.json', 'utf-8'),
    // );
    // const dna = new Set(storedGenomes);

    // try {
    //   await generateCollection(newConfig, null);
    // } catch (error) {
    //   return error;
    // }
    return 'Success!';
  }
}
