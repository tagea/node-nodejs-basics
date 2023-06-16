import fs from 'fs';
import { getFilePath } from './get_path.js';

const remove = async () => {
    const fileName = getFilePath('files', 'fileToRemove.txt');

    const error = new Error('FS operation failed');

    if (!fs.existsSync(fileName)) {
        throw error;
    } else {
        fs.unlink(fileName, (err) => {
            if (err) throw error;
        });
    }
};

await remove();
