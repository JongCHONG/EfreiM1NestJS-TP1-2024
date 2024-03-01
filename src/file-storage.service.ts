import * as fs from 'fs';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FileStorageService {
  private filePath: string = 'data.json';

  readData(): any {
    console.log(this.filePath);
    console.log(fs.readFileSync(this.filePath, 'utf8'));
    
    
    return JSON.parse(fs.readFileSync(this.filePath, 'utf8'));
  }

  writeData(data: any): void {
    fs.writeFileSync(this.filePath, JSON.stringify(data, null, 2));
  }
}