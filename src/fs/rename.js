import { access, rename as fsRename } from "node:fs/promises";

const rename = async () => {
  const wrongFilePath = "./src/fs/files/wrongFilename.txt";
  const properFilePath = "./src/fs/files/properFilename.md";

  async function fileExists(path) {
    try {
      await access(path);
      return true;
    } catch {
      return false;
    }
  }

  const wrongFileExists = await fileExists(wrongFilePath);
  const properFileExists = await fileExists(properFilePath);

  try {
    if (!wrongFileExists || properFileExists) {
        throw new Error('FS operation failed');
    }

    await fsRename(wrongFilePath, properFilePath);
  } catch (err) {
    throw err;
  }
};

await rename();
