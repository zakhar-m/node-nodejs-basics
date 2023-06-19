import {createWriteStream, createReadStream} from 'node:fs';
import {createGzip} from 'node:zlib';

const compress = async () => {
    const filePath = './src/zip/files/fileToCompress.txt';
    const archivePath = './src/zip/files/archive.gz';

    const rStream = createReadStream(filePath);
    const wStream = createWriteStream(archivePath);

    rStream.pipe(createGzip()).pipe(wStream);
};

await compress();