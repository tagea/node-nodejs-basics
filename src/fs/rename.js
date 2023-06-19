import fs from 'fs';
import { getFilePath } from './utility/get_path.js';
import { getErrors } from '../utility/errors.js';

const rename = async () => {
    const fileToRename = getFilePath('files', 'wrongFilename.txt');
    const fileTarget = getFilePath('files', 'properFilename.txt');

    const error = getErrors('file');

    if (!fs.existsSync(fileToRename) || fs.existsSync(fileTarget)) {
        throw error;
    } else {
        fs.rename(fileToRename, fileTarget, (err) => {
            if (err) throw error;
        });
    }
};

await rename();
