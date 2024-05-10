import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { ApiKeyStrategy } from './pikey.strategy';

@Module({
    imports: [PassportModule],
    controllers: [],
    providers:[AuthService, ApiKeyStrategy],
    exports:[AuthService]
})
export class AuthModule {}
