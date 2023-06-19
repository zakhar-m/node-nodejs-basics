import { Transform } from "node:stream";

const transform = async () => {
  const transformStream = new Transform({
    transform(chunk, encoding, callback) {
      const transformedData = [...chunk.toString()].reverse().join("");

      callback(null, transformedData);
    },
  });

  process.stdin.pipe(transformStream).pipe(process.stdout);
};

await transform();
