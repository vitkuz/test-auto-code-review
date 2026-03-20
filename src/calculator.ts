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

const OPERATIONS: Record<Operation, (a: number, b: number) => number> = {
  add,
  subtract,
  multiply,
  divide,
};

const calculate = (operation: string, a: number, b: number): number => {
  if (!(operation in OPERATIONS)) {
    throw new Error(`Invalid operation: "${operation}". Valid operations are: ${Object.keys(OPERATIONS).join(', ')}`);
  }

  return OPERATIONS[operation as Operation](a, b);
};

export { add, subtract, multiply, divide, calculate };
export type { Operation };
