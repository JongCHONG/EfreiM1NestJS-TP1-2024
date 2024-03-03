import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { TaskMiddleware } from './task.middleware';
import { FileStorageService } from 'src/file-storage.service';

@Module({
  controllers: [TaskController],
  providers: [TaskService, FileStorageService],
})
export class TaskModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(TaskMiddleware)
      .forRoutes({ path: '', method: RequestMethod.POST });
  }
}