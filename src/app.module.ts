import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DynamodbModule } from './dynamodb/dynamodb.module';

@Module({
  imports: [DynamodbModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
