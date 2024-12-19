import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('<Button />', () => {
  it('renders the Sign in button', () => {
    render(<Button label="Sign in" />);
    const button = screen.getByRole('button', {
      name: 'Sign in',
    });
    expect(button).toBeInTheDocument();
  });

  it('renders the Register button', () => {
    render(<Button label="Translate" />);
    const button = screen.getByRole('button', {
      name: 'Translate',
    });
    expect(button).toBeInTheDocument();
  });
});
