import { describe, it, expect } from 'vitest';
import { normaliseWindSpeed } from '@/lib/weather';

describe('normaliseWindSpeed', () => {
  it('returns a number', () => {
    expect(typeof normaliseWindSpeed(0)).toBe('number');
  });
});
