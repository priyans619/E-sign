import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ZohoService } from './zoho/zoho.service';
import { ZohoController } from './zoho/zoho.controller';

// @Module({
//   imports: [],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}
@Module({
  imports: [
    ConfigModule.forRoot(), // Load environment variables
  ],
  controllers: [ZohoController],
  providers: [ZohoService],
})
export class AppModule {}