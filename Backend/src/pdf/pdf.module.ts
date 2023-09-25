// src/pdf/pdf.module.ts
import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { PdfController } from './pdf.controller';
import { PdfService } from './pdf.service';
import { multerConfig } from '../multer.config';

@Module({
  imports: [
    MulterModule.register(multerConfig), // Register multer with the configuration
  ],
  controllers: [PdfController],
  providers: [PdfService],
})
export class PdfModule {}
