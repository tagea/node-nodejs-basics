import fs from 'fs';
import { getFilePath } from '../utility/get_path.js';
import { getErrors } from '../utility/errors.js';

const read = async () => {
    const fileName = getFilePath('files', 'fileToRead.txt', import.meta.url);
    const error = getErrors('file');

    if (!fs.existsSync(fileName)) {
        throw error;
    } else {
        const readableStream = fs.createReadStream(fileName, {
            encoding: 'utf8',
        });
        readableStream.on('data', (chunk) => {
            process.stdout.write(chunk);
        });
        readableStream.on('error', function (err) {
            console.log(err.stack);
        });
    }
};

await read();
