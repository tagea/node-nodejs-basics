import path from 'path';
import { fileURLToPath } from 'url';

export const getFilePath = (folderName, fileName, scriptPath) => {
    const __filename = fileURLToPath(scriptPath);
    const __dirname = path.dirname(__filename);
    const fullFilePath = `${__dirname}/${folderName}/${fileName}`;
    return fullFilePath;
};

export const getFolderName = (folderName, scriptPath) => {
    const __filename = fileURLToPath(scriptPath);
    const __dirname = path.dirname(__filename);
    const fullFolderPath = `${__dirname}/${folderName}`;
    return fullFolderPath;
};
