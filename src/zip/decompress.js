import fs from 'fs';
import { createUnzip } from 'zlib';
import { getFilePath } from '../utility/get_path.js';
import { getErrors } from '../utility/errors.js';

const decompress = async () => {
    const fileName = getFilePath('files', 'fileToCompress.txt', import.meta.url);
    const fileNameGZ = getFilePath('files', 'archive.gz', import.meta.url);
    const error = getErrors('file');

    if (!fs.existsSync(fileNameGZ)) {
        throw error;
    } else {
        const unzip = createUnzip();
        const source = fs.createReadStream(fileNameGZ);
        const destination = fs.createWriteStream(fileName);
        source.pipe(unzip).pipe(destination);
    }
};

await decompress();
