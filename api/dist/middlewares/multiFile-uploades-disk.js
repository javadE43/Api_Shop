import { dirname, join, extname } from "path";
import { fileURLToPath } from "url";
import multer from "multer";
import mkdir from 'mkdirp';
import { v4 as uuidv4 } from 'uuid';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const multerStorage = multer.diskStorage({
    destination(req, file, callback) {
        mkdir("./src/public/uploades/images/products").then(() => {
            callback(null, join(__dirname, "..", "/public/uploades/images/products"));
        });
        console.log(req.hostname + "hostname-----------------------------");
        console.log(file.size + "filesize-------------------------");
    },
    filename(req, file, callback) {
        const ext = file.mimetype.split('/')[1];
        const filename = `shop-${uuidv4()}-${Date.now()}.${ext}`;
        req.body.images = [];
        callback(null, filename);
    },
});
const multerFilter = (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png/;
    const size = 5000000;
    const chackSize = Number(file.size) === size;
    const extName = fileTypes.test(extname(file.originalname).toLowerCase());
    const mimtype = fileTypes.test(file.mimetype);
    if (extName === false && mimtype === false) {
        return cb(new multer.MulterError('LIMIT_UNEXPECTED_FILE'));
    }
    else if (chackSize) {
        return cb(new multer.MulterError('LIMIT_FILE_SIZE'));
    }
    cb(null, true);
    console.log(req.hostname);
};
const upload = multer({
    storage: multerStorage,
    fileFilter: multerFilter,
    limits: { fileSize: 1024 * 1024 * 5, files: 4 },
});
export const uploadesProductImagesGallery = upload.fields([
    { name: 'imageproduct', maxCount: 4 }
]);
//# sourceMappingURL=multiFile-uploades-disk.js.map