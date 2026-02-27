import { describe, it, expect } from 'vitest';
import { add } from './stringCalculator';

describe('String Calculatore', () => {
    it('returns = for empty string', () => {
        expect(add('')).toBe(0);
    });

    it('returns number when single number is passed', () => {
        expect(add('5')).toBe(5);
    });

    it('returns sum of comma separated numbers', () => {
        expect(add('1,2,3')).toBe(6);
    });
})