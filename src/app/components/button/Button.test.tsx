import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('<Button />', () => {
  it('renders the button', () => {
    render(<Button label="Sign in" />);
    const button = screen.getByRole('button', {
      name: 'Sign in',
    });
    expect(button).toBeInTheDocument();
  });
});
