import path from 'path';
import fs from 'fs';
const multer = require('multer');

const dirPath = path.resolve(__dirname, '../../uploads/images');
const extName: string[] = ['jpg', 'jpeg', 'png'];

const storage = multer.diskStorage({
    destination(req: any, file: any, cb: any) {
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, { recursive: true });
        }
        cb(null, dirPath);
    },
    filename(req: any, file: any, cb: any) {
        const extType = file.mimetype.split('/')[1];
        const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}.${extType}`;
        cb(null, `${file.fieldname}-${uniqueSuffix}`);
    },
});

export function checkFileExtName(req: any, file: any, cb: any) {
    const extType = file.mimetype.split('/')[1];
    if (extName.indexOf(extType) > 0) {
        return cb(null, true);
    }
}

export const upload = multer({
    storage,
    fileFilter: checkFileExtName,
});
