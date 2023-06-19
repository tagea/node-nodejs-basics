import { Transform } from 'stream';

const transform = async () => {
    const reverseData = new Transform({
        transform(chunk, encoding, callback) {
            const reverseChunk = chunk.toString().split('').reverse().join('');
            this.push(reverseChunk);
            callback();
        },
    });
    process.stdin.pipe(reverseData).pipe(process.stdout);
};

await transform();
