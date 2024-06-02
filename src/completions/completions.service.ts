import { Injectable } from '@nestjs/common';
import { CompletionsDto } from "./dtos/completions.dto";
import { OpenaiService } from 'src/openai/openai.service';

@Injectable()
export class CompletionsService {
    constructor(private openaiService: OpenaiService) { }

    async moderationApi(body: CompletionsDto) {
        const bodyJSON = JSON.stringify(body.messages)
        const moderationResult = await this.openaiService.moderateContent(bodyJSON)
        return moderationResult
    }
    typeQualifications = [
        {
            type: "toDoList",
            function: (e: string) => {
                console.log(e)
            }
        },
        {
            type: "calendar",
            function: (e: string) => {
                console.log(e)
            }
        },
        {
            type: "other",
            function: (e: string) => {
                console.log(e)
            }
        },
    ]
    async typeQualification(body: CompletionsDto) {
        let systemMessage: string = `For the purpose of organizing our tasks, 
        and events, we'll need to categorize received messages between a few 
        categories. Please respond by indicating which category the message 
        should fall under. We would appreciate concise answers. The answer must 
        be in the form of one word in English. For example, if the message is 
        about task, the response will be 'toDoList', if a message is 
        about an event date, your reply would be 'calendar'. Your choices include `
        this.typeQualifications.forEach((e) => {
            systemMessage = systemMessage + e.type + ", "
        })
        const userMessageArray = body.messages.filter((e: { content: string; 
            role: string; }) => {
            return e.role === "user"
        })
        if (userMessageArray.length === 0) {
            return false
        }
        let userMessage: string = ""
        userMessageArray.forEach((e: { content: string; role: string; }) => {
            userMessage = userMessage + " " + e.content
        })
        const messages = [
            {
                role: "system",
                content: systemMessage,
            },
            {
                role: "user",
                content: userMessage
            }

        ]
        const qualificationResult = await this.openaiService.completion(messages)
        return qualificationResult
    }
}
