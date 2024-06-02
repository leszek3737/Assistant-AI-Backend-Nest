import { CompletionsService } from './completions.service';
import { CompletionsController } from './completions.controller';
import { Module } from '@nestjs/common';
import { OpenaiService } from 'src/openai/openai.service';

@Module({
    imports: [],
    controllers: [
        CompletionsController,
    ],
    providers: [
        CompletionsService,
        OpenaiService,
    ],
})
export class CompletionsModule { }
