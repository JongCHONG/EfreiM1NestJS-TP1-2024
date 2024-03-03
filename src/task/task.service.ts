import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { FileStorageService } from 'src/file-storage.service';

@Injectable()
export class TaskService {
  constructor(private fileStorageService: FileStorageService) {}

  addTask(listId: string, task: any) {
    const data = this.fileStorageService.readData();
    task.id = uuidv4();

    data.lists = data.lists.map((list: { id: string; tasks: any[] }) => {
      if (list.id === listId) {
        list.tasks.push(task);
      }
      return list;
    });

    this.fileStorageService.writeData(data);
    return 'Task created successfully';
  }
}
