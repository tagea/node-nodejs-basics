import fs from 'fs';
import { getFilePath } from '../utility/get_path.js';
import { getErrors } from '../utility/errors.js';

const write = async () => {
    const fileName = getFilePath('files', 'fileToWrite.txt', import.meta.url);
    const error = getErrors('file');

    if (!fs.existsSync(fileName)) {
        throw error;
    } else {
        const writableStream = fs.createWriteStream(fileName);
        process.stdin.on('data', (chunk) => {
            writableStream.write(chunk);
        });
    }
};

await write();
