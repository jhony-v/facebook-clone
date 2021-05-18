import multer from "multer";
import path from "path";
export const storageDiskStorageMulter = multer.diskStorage({
    destination : (req,file,cb) => {
        cb(null,path.join(__dirname,"..","files"));
    },
    filename : (req,file,cb) => {
        cb(null,Date.now() + (file.originalname));
    }    
})

export const storageUpload = multer({
    storage : storageDiskStorageMulter,
})