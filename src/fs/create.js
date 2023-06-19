import fs from 'fs';
import { getFilePath } from './utility/get_path.js';
import { getErrors } from '../utility/errors.js';

const create = async () => {
    const fileName = getFilePath('files', 'fresh.txt');

    const content = 'I am fresh and young';

    const error = getErrors('file');

    if (fs.existsSync(fileName)) {
        throw error;
    } else {
        fs.writeFileSync(fileName, content, (err) => {
            if (err) throw error;
        });
    }
};

await create();
