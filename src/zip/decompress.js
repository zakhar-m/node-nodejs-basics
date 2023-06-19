import { createWriteStream, createReadStream } from "node:fs";
import { createGunzip } from "node:zlib";

const decompress = async () => {
  const filePath = "./src/zip/files/fileToCompress.txt";
  const archivePath = "./src/zip/files/archive.gz";

  const gunzip = createGunzip();
  const rStream = createReadStream(archivePath);
  const wStream = createWriteStream(filePath);

  rStream.pipe(gunzip).pipe(wStream);
};

await decompress();
