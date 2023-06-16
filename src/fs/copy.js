import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const copy = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const folderPath = __dirname + '/files';
    const copyFolderPath = __dirname + '/files_copy';

    const error = new Error('FS operation failed');

    if (fs.existsSync(copyFolderPath) || !fs.existsSync(folderPath)) {
        throw error;
    } else if (fs.existsSync(folderPath)) {
        fs.cp(folderPath, copyFolderPath, { recursive: true }, (err) => {
            if (err) throw error;
        });
    }
};

await copy();
