import { Injectable } from '@nestjs/common';
import { CompletionsDto } from "./dtos/completions.dto";
import { OpenaiService } from 'src/openai/openai.service';

@Injectable()
export class CompletionsService {
    constructor(private openaiService:OpenaiService) {}
    async newMes(body: CompletionsDto){
        const bodyJSON = JSON.stringify(body.messages)
        const moderationResult = await this.openaiService.moderateContent(bodyJSON) 
        if(moderationResult === true){
            return "Message not in compliance with OpenAI policy"
        }
        return moderationResult
    }
}
