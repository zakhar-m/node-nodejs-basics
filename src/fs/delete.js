import {access, rm} from 'node:fs/promises';

const remove = async () => {
    const fileToRemovePath = "./src/fs/files/fileToRemove.txt";
  
    async function fileExists(path) {
      try {
        await access(path);
        return true;
      } catch {
        return false;
      }
    }

    const fileToRemoveExists = await fileExists(fileToRemovePath);

    if (!fileToRemoveExists) {
        throw new Error('FS operation failed');
    }

    try {
        await rm(fileToRemovePath);
    } catch(err) {
        throw err;
    }
};

await remove();