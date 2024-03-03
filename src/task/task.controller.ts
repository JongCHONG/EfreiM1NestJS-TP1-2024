import { Controller, Body, Post, Query } from '@nestjs/common';
import { TaskService } from './task.service';

@Controller()
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Post()
  addTask(@Query('listId') listId: string, @Body() task: any) {
    return this.taskService.addTask(listId, task);
  }
}
