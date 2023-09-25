import { Test, TestingModule } from '@nestjs/testing';
import { PdfService } from '../src/pdf/pdf.service';
import { HttpException, HttpStatus } from '@nestjs/common';
import { Readable } from 'stream';

describe('PdfService', () => {
  let pdfService: PdfService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PdfService],
    }).compile();

    pdfService = module.get<PdfService>(PdfService);
  });

  it('should be defined', () => {
    expect(pdfService).toBeDefined();
  });

  describe('uploadPdf', () => {
    it('should upload a PDF file', async () => {
      // mockfile
      const mockFile: Express.Multer.File = {
        fieldname: 'pdf',
        originalname: '_test.pdf',
        encoding: '7bit',
        mimetype: 'application/pdf',
        size: Buffer.from('test content').length,
        buffer: Buffer.from('test content'),
        destination: '',
        filename: '',
        stream: new Readable,
        path: ''
      };

      
      const result = await pdfService.uploadPdf(mockFile);

    
      expect(result).toEqual({
        id: '12345',
        filename: 'test.pdf',
        // other properties
      });
    });

    it('should handle file upload errors', async () => {
      // for invalid uplod
      const mockFile = {
        originalname: 'invalid.pdf',
        buffer: Buffer.from('invalid content'),
      };

      // for error response
      const mockError = new HttpException(
        'Invalid PDF file',
        HttpStatus.BAD_REQUEST,
      );

      jest.spyOn(pdfService, 'uploadPdf').mockRejectedValue(mockError);

    //   call pdfService
      try {
        await pdfService.uploadPdf(mockFile);
      } catch (error) {
        
        expect(error).toBeInstanceOf(HttpException);
        expect(error.response).toEqual('Invalid PDF file');
        expect(error.getStatus()).toEqual(HttpStatus.BAD_REQUEST);
      }
    });
  });

  // Add more test cases for other service methods or scenarios here
});