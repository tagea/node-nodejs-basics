import fs from 'fs';
import { getFolderName } from './utility/get_path.js';
import { getErrors } from '../utility/errors.js';

const copy = async () => {
    const folder = getFolderName('files');
    const copyFolder = getFolderName('files_copy');

    const error = getErrors('file');

    if (fs.existsSync(copyFolder) || !fs.existsSync(folder)) {
        throw error;
    } else if (fs.existsSync(folder)) {
        fs.cp(folder, copyFolder, { recursive: true }, (err) => {
            if (err) throw error;
        });
    }
};

await copy();
