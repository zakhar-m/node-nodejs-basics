const parseArgs = () => {
  const args = process.argv.slice(2);
  const argValuePairs = [];

  while (args.length > 0) argValuePairs.push(args.splice(0, 2));

  const result = argValuePairs
    .map(([arg, value]) => `${arg.slice(2)} is ${value}`)
    .join(", ");
  console.log(result);
};

parseArgs();
