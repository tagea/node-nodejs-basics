import { argv } from 'process';

const [, , ...args] = argv;

const parseEnv = () => {
    let printString = '';
    const envKeys = Object.keys(process.env);
    const filterRSS = envKeys.filter((key) => key.indexOf('RSS_') === 0);
    filterRSS.forEach((key) => {
        printString += `${key}=${process.env[key]}; `;
    });
    console.log(printString);
};

parseEnv();
