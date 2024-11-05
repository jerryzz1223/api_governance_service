import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DynamoDBService {
    private client: DynamoDBDocumentClient
    constructor(){

    }
async putItem(tableName:string,item:Record<string,any>){
    
}
}
