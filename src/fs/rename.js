import fs from 'fs';
import { getFilePath } from './get_path.js';

const rename = async () => {
    const fileToRename = getFilePath('files', 'wrongFilename.txt');
    const fileTarget = getFilePath('files', 'properFilename.txt');

    const error = new Error('FS operation failed');

    if (!fs.existsSync(fileToRename) || fs.existsSync(fileTarget)) {
        throw error;
    } else {
        fs.rename(fileToRename, fileTarget, (err) => {
            if (err) throw error;
        });
    }
};

await rename();
