import { Injectable } from '@nestjs/common';
import { ChatOpenAI } from 'langchain/chat_models/openai';
import OpenAI from 'openai';

@Injectable()
export class OpenaiService {
  private chatModel: ChatOpenAI;

  constructor() {
    this.chatModel = new ChatOpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  async moderateContent(inputText) {
    const openai = new OpenAI()

    const moderationResult = await openai.moderations.create({
      "input": inputText,
    });

    const responseArray = moderationResult.results.map(element => element.flagged ? true : false);
    return responseArray[0];

  }
}