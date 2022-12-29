import { render, screen } from '@testing-library/react';
import About from './About';

describe('should test', () => {
  it('test', () => {
    render(<About />);
    const linkElement = screen.getByText(/about/i);
    expect(linkElement).toBeInTheDocument();
  });
});
