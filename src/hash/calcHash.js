import { createHash } from "node:crypto";
import { readFile } from "node:fs";

const calculateHash = async () => {
  const filePath = "./src/hash/files/fileToCalculateHashFor.txt";

  readFile(filePath, (err, data) => {
    if (err) throw err;

    const hash = createHash("sha256");
    hash.update(data);
    console.log(hash.digest("hex"));
  });
};

await calculateHash();
