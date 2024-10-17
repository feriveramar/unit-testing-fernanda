export const factorial = (x: number): number =>
    x < 0 || x > 15 ? 0 : x === 0 ? 1 : Array.from({ length: x }, (_, i) => i + 1).reduce((a, b) => a * b, 1);