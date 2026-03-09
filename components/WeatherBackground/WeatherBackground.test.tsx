import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import WeatherBackground from './WeatherBackground';

describe('WeatherBackground', () => {
  it('renders', () => {
    const { container } = render(<WeatherBackground weatherState="clear" />);
    const el = container.querySelector('[aria-hidden]');
    expect(el).toBeTruthy();
  });
});
