const parseEnv = () => {
  const parsedResult = Object.keys(process.env)
    .filter((varName) => varName.startsWith("RSS_"))
    .map((varName) => {
      return `${varName}=${process.env[varName]}`;
    })
    .join("; ");

  console.log(parsedResult);
};

parseEnv();
