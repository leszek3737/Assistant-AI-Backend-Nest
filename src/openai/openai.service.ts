import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';

@Injectable()
export class OpenaiService {
  private openai: OpenAI;

  constructor() {
    this.openai = new OpenAI()
  }

  async moderateContent(inputText: string) {

    const moderationResult = await this.openai.moderations.create({
      "input": inputText,
    });

    const responseArray = moderationResult.results.map(element => element.flagged ? true : false);
    
    return responseArray[0];

  }

  async completion(messages, model:string  = "gpt-3.5-turbo"){

  const responseCompletion = await this.openai.chat.completions.create({
    messages: messages,
    model: model,
  });
  return responseCompletion.choices[0].message.content
  }

}