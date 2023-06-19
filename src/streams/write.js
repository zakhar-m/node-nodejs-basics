import fs from "node:fs";

const write = async () => {
    const filePath = "./src/streams/files/fileToWrite.txt";

    const wStream = fs.createWriteStream(filePath);

    process.stdin.on('data', (chunk) => {
        wStream.write(chunk);
    })
};

await write();