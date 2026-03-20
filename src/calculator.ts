type Operation = 'add' | 'subtract' | 'multiply' | 'divide';

const add = (a: number, b: number): number => a + b;

const subtract = (a: number, b: number): number => a - b;

const multiply = (a: number, b: number): number => a * b;

const divide = (a: number, b: number): number => {
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
};

const calculate = (operation: Operation, a: number, b: number): number => {
  const operations: Record<Operation, (a: number, b: number) => number> = {
    add,
    subtract,
    multiply,
    divide,
  };

  return operations[operation](a, b);
};

const main = (): void => {
  console.log('Addition: 2 + 3 =', calculate('add', 2, 3));
  console.log('Subtraction: 10 - 4 =', calculate('subtract', 10, 4));
  console.log('Multiplication: 5 * 6 =', calculate('multiply', 5, 6));
  console.log('Division: 15 / 3 =', calculate('divide', 15, 3));
};

main();

export { add, subtract, multiply, divide, calculate };
export type { Operation };
