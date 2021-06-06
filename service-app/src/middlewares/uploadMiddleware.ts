import { storageUpload } from "@root/config/upload"

export const uploadMultipleFilesMiddleware =  storageUpload.single('images')