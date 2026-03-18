const greet = (name: string): string => {
  return `Hello, ${name}!`;
};

const main = (): void => {
  const message: string = greet('World');
  console.log(message);
};

main();
