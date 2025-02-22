import fs from 'fs';
import { getFilePath } from '../utility/get_path.js';
import { getErrors } from '../utility/errors.js';

const read = async () => {
    const fileName = getFilePath('files', 'fileToRead.txt', import.meta.url);

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
