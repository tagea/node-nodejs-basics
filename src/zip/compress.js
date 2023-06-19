import fs from 'fs';
import { createGzip } from 'zlib';
import { getFilePath } from '../utility/get_path.js';
import { getErrors } from '../utility/errors.js';

const compress = async () => {
    const fileName = getFilePath('files', 'fileToCompress.txt', import.meta.url);
    const fileNameGZ = getFilePath('files', 'archive.gz', import.meta.url);
    const error = getErrors('file');

    if (!fs.existsSync(fileName)) {
        throw error;
    } else {
        const gzip = createGzip();
        const source = fs.createReadStream(fileName, { encoding: 'utf8' });
        const destination = fs.createWriteStream(fileNameGZ);
        source.pipe(gzip).pipe(destination);
    }
};

await compress();
