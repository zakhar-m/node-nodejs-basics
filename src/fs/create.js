import { writeFile, access } from 'node:fs/promises';

const create = async () => {
    const filePath = './src/fs/files/fresh.txt'
    const content = 'I am fresh and young';

    async function fileExists(path) {
        try {
            await access(path);
            return true;
        } catch {
            return false;
        }
    }

    try {
        const exists = await fileExists(filePath);
        if (exists) {
            throw new Error('FS operation failed');
        }

        writeFile(filePath, content);
    } catch (err) {
        throw err;
    }
};

await create();