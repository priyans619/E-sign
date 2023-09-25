import { Controller, Param, Post } from "@nestjs/common";
import { ZohoService } from "./zoho.service";

@Controller('zoho')
export class ZohoController {
  constructor(private readonly zohoService: ZohoService) {}

  @Post('esign/:pdfId')
  async addESignTags(@Param('pdfId') pdfId: string) {
    // PDF by ID and call Zoho service to add e-sign tags.
  }
}