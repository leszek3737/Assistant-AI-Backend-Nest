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
        return await this.completionsService.newMes(body)
    }
}
