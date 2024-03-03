import { Injectable } from '@nestjs/common';
import { FileStorageService } from './file-storage.service';

@Injectable()
export class AppService {
  constructor(private fileStorageService: FileStorageService) {}

  getLists() {
    const data = this.fileStorageService.readData();

    const lists = data.lists.map((list: { id: string; name: string }) => ({
      id: list.id,
      name: list.name,
    }));

    return lists;
  }
}
