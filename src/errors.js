export const getErrors = (type) => {
    const errorText = {
        file: 'FS operation failed',
    };
    return new Error(errorText[type]);
};
