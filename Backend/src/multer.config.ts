import { diskStorage } from 'multer';
import { extname, join } from 'path';

export const multerConfig = {
  storage: diskStorage({
    destination: (_req, _file, callback) => {
      const uploadsDir = join(__dirname, '..', 'pdf', 'uploads'); // Adjust the path as needed
      callback(null, uploadsDir);
    },
    filename: (_req, file, callback) => {
      const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
      const fileExtName = extname(file.originalname);
      callback(null, `${file.fieldname}-${uniqueSuffix}${fileExtName}`);
    },
  }),
  limits: {
    fileSize: 10 * 1024 * 1024, // 10 mb file size
  },
  fileFilter: (_req: any, file: { mimetype: string }, callback: (arg0: Error, arg1: boolean) => void) => {
    const allowedMimes = ['application/pdf']; // only pdf file
    if (allowedMimes.includes(file.mimetype)) {
      callback(null, true);
    } else {
      callback(new Error('Invalid file type'), false);
    }
  },
};
