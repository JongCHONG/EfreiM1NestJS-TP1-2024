import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FileStorageService } from './file-storage.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, FileStorageService],
})
export class AppModule {}
