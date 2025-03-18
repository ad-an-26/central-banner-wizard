
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

vi.mock('../components/Banner', () => ({
  default: () => <div data-testid="mock-banner">Banner Component</div>
}));

vi.mock('../components/ControlPanel', () => ({
  default: () => <div data-testid="mock-control-panel">Control Panel Component</div>
}));

describe('App Component', () => {
  it('renders correctly', () => {
    render(<App />);
    expect(screen.getByTestId('mock-banner')).toBeInTheDocument();
    expect(screen.getByTestId('mock-control-panel')).toBeInTheDocument();
  });

  it('initializes with default state values', () => {
    const { container } = render(<App />);
    const appInstance = container.firstChild;
    expect(appInstance).toBeInTheDocument();
  });
});