import { argv } from 'process';

const [, , ...args] = argv;

const parseArgs = () => {
    let printString = '';
    for (const arg of args) {
        arg.indexOf('--') === 0 ? (printString += `${arg.slice(2)} is `) : (printString += `${arg}, `);
    }
    console.log(printString);
};

parseArgs();
