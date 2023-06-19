import fs from "node:fs";

const read = async () => {
  const filePath = "./src/streams/files/fileToRead.txt";
  const rStream = fs.createReadStream(filePath, "utf8");

  rStream.on("data", (chunk) => {
    process.stdout.write(chunk);
  });
};

await read();
