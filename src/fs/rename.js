import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const rename = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const fullFileToRenamePath = __dirname + '/files/wrongFilename.txt';
    const fullFileTargetPath = __dirname + '/files/properFilename.md';

    const error = new Error('FS operation failed');

    if (!fs.existsSync(fullFileToRenamePath) || fs.existsSync(fullFileTargetPath)) {
        throw error;
    } else {
        fs.rename(fullFileToRenamePath, fullFileTargetPath, (err) => {
            if (err) throw error;
        });
    }
};

await rename();
