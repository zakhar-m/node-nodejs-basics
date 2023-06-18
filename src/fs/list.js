import { access, readdir } from "node:fs";

const list = async () => {
  const dirPath = "./src/fs/files/";

  access(dirPath, (err) => {
    if (err) throw new Error("FS operation failed");

    readdir(dirPath, (err, files) => {
      if (err) throw err;

      files.forEach((fileName) => console.log(fileName));
    });
  });
};

await list();
