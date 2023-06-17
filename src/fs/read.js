import fs from 'fs';
import { getFilePath } from './get_path.js';
import { getErrors } from '../errors.js';

const read = async () => {
    const fileName = getFilePath('files', 'fileToRead.txt');

    const error = getErrors('file');

    if (!fs.existsSync(fileName)) {
        throw error;
    } else {
        fs.readFile(fileName, 'utf8', (err, data) => {
            if (err) throw error;
            console.log(data);
        });
    }
};

await read();
