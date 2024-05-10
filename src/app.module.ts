import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { CompletionsModule } from './completions/completions.module';
import { OpenaiService } from './openai/openai.service';
import { OpenaiModule } from './openai/openai.module';

@Module({
  imports: [AuthModule, CompletionsModule, OpenaiModule],
  controllers: [],
  providers: [OpenaiService],
})
export class AppModule {}
