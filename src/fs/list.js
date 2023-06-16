import fs from 'fs';
import { getFolderName } from './get_path.js';

const list = async () => {
    const folder = getFolderName('files');

    const error = new Error('FS operation failed');

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
