import path from 'path';
import { fileURLToPath } from 'url';

export const getFilePath = (folderName, fileName) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const fullFilePath = `${__dirname}/${folderName}/${fileName}`;
    return fullFilePath;
};
