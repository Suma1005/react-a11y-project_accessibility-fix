export function add(numbers: string): number {
  if (numbers.trim() === '') return 0;

  const values = numbers.split(',').map((num) => {
    const parsed = Number(num.trim());

    if (Number.isNaN(parsed)) {
      throw new Error('Invalid number detected');
    }

    return parsed;
  });

  return values.reduce((acc, curr) => acc + curr, 0);
}