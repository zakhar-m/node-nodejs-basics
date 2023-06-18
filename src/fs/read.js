import { readFile } from "node:fs";

const read = async () => {
  const filePath = "./src/fs/files/fileToRead.txt";

  readFile(filePath, "utf8", (err, data) => {
    if (err) throw new Error("FS operation failed");

    console.log(data);
  });
};

await read();
