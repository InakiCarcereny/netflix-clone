import { render, screen } from '@testing-library/react';
import { H5 } from './H5';

describe('<H5 />', () => {
  it('renders H5 component', () => {
    render(<H5 label="Test" />);
    const h5 = screen.getByRole('heading', {
      level: 5,
    });
    expect(h5).toBeInTheDocument();
  });
});
