import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    validateApiKey(apiKey: string){
        return process.env.APIKEY === apiKey
    }
}
