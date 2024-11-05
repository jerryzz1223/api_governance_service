import { Controller,Get,Post,Body } from '@nestjs/common';
import { DynamoDBService } from './dynamodb.service';

@Controller('dynamodb')
export class DynamoDBController {
    constructor(private readonly dynamoDBService: DynamoDBService){
        
        
    }
    @Post("add")
    async addItem(@Body() item: Record<string, any>) {
        return await this.dynamoDBService.putItem("apigov", item)
    }
}
