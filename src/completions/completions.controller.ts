import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { CompletionsService } from './completions.service';
import { CompletionsDto } from './dtos/completions.dto';
import { ApiKeyAuthGuard } from 'src/auth/apikey-auth.guard';

@Controller('completions')
export class CompletionsController {
    constructor(private completionsService: CompletionsService) { }

    @Post()
    @UseGuards(ApiKeyAuthGuard)
    async newMessages(@Body() body: CompletionsDto){
        const moderationApi = await this.completionsService.moderationApi(body);
        if(moderationApi === true){
            return "Message not in compliance with OpenAI policy"
        }
        let typeQualification = await this.completionsService.typeQualification(body);
        if(typeQualification === false){
            return "No message was entered"
        }
        let objectTypeQualification = this.completionsService.typeQualifications.find((e)=>e.type = typeQualification)
        objectTypeQualification.function(objectTypeQualification.type)
        return typeQualification

    }
}
