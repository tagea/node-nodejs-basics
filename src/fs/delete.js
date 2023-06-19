import fs from 'fs';
import { getFilePath } from './utility/get_path.js';
import { getErrors } from '../utility/errors.js';

const remove = async () => {
    const fileName = getFilePath('files', 'fileToRemove.txt');

    const error = getErrors('file');

    if (!fs.existsSync(fileName)) {
        throw error;
    } else {
        fs.unlink(fileName, (err) => {
            if (err) throw error;
        });
    }
};

await remove();
