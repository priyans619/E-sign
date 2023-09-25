import { Controller, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { PdfService } from "./pdf.service";

// src/pdf/pdf.controller.ts
@Controller('pdfs')
export class PdfController {
  constructor(private readonly pdfService: PdfService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('pdf'))
  async uploadPdf(@UploadedFile() file: Express.Multer.File) {
    const uploadedPdf = await this.pdfService.uploadPdf(file);
    return uploadedPdf;
  }
}


