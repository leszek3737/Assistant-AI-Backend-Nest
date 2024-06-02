import { IsArray, IsString } from "class-validator";

export class CompletionsDto {
    @IsString()
    model: string;
    @IsArray()
    messages: [];
}