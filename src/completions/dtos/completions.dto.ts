import { IsArray, IsString } from "class-validator";

export class CompletionsDto {
    @IsString({ message: 'Musi być String'})
    model: string;
    @IsArray({ message: 'Musi być Tablica'})
    messages: [];
}