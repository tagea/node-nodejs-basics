import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const create = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const fullFilePath = __dirname + '/files/fresh.txt';

    const content = 'I am fresh and young';

    const error = new Error('FS operation failed');

    if (fs.existsSync(fullFilePath)) {
        throw error;
    } else {
        fs.writeFileSync(fullFilePath, content, (err) => {
            if (err) throw error;
        });
    }
};

await create();
