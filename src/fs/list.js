import fs from 'fs';
import { getFolderName } from './utility/get_path.js';
import { getErrors } from '../utility/errors.js';

const list = async () => {
    const folder = getFolderName('files');

    const error = getErrors('file');

    if (!fs.existsSync(folder)) {
        throw error;
    } else {
        fs.readdir(folder, (err, files) => {
            if (err) throw error;
            console.log(files);
        });
    }
};

await list();
