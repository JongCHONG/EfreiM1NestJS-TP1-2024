import { Controller, Get, Post, Body } from '@nestjs/common';
import { FileStorageService } from './file-storage.service';

@Controller()
export class AppController {
  constructor(private fileStorageService: FileStorageService) {}

  @Get()
  getTasks() {
    return this.fileStorageService.readData();
  }

  @Post()
  createTask(@Body() task: any) {
    const data = this.fileStorageService.readData();
    data.tasks.push(task); // Assuming tasks is an array in your data.json
    this.fileStorageService.writeData(data);
    return 'Task created successfully';
  }
}
