import fs from 'fs';
import cryptoHash from 'crypto';
import { getFilePath } from '../utility/get_path.js';
import { getErrors } from '../utility/errors.js';

const calculateHash = async () => {
    const fileName = getFilePath('files', 'fileToCalculateHashFor.txt', import.meta.url);

    const error = getErrors('file');

    if (!fs.existsSync(fileName)) {
        throw error;
    } else {
        fs.readFile(fileName, 'utf8', (err, data) => {
            if (err) throw error;
            const hash = cryptoHash.createHash('sha256').update(data).digest('hex');
            console.log(hash);
        });
    }
};

await calculateHash();
