import { Injectable } from "@nestjs/common";
import { Pdf } from "./pdf.entity";

@Injectable()
export class PdfService {
  async uploadPdf(file: Express.Multer.File): Promise<Pdf> {
    //  PDF upload and storage logic.
  
    const savedPdf = await this.savePdfToDatabase(file); 

    return savedPdf;
  }

  private async savePdfToDatabase(file: Express.Multer.File): Promise<Pdf> {
    // I am storing in local stroage
    const pdf = new Pdf();
    pdf.id = generateUniqueId(); //  a unique ID
    pdf.name = file.originalname;
    pdf.content = file.buffer; // storing pdf as a Buffer
  //  save to local storege first

    return pdf; // PDF entity
  }
}
function generateUniqueId(): string {
    throw new Error("Function not implemented.");
}

