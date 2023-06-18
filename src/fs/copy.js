import { cp, access } from "node:fs/promises";

const copy = async () => {
  const fromPath = "./src/fs/files/";
  const toPath = "./src/fs/files_copy/";

  async function dirExists(path) {
    try {
      await access(path);
      return true;
    } catch {
      return false;
    }
  }

  try {
    const fromDirExists = await dirExists(fromPath);
    const toDirExists = await dirExists(toPath);

    if (!fromDirExists || toDirExists) {
      throw new Error("FS operation failed");
    }

    await cp(fromPath, toPath, { recursive: true });
  } catch (err) {
    throw err;
  }
};

await copy();
