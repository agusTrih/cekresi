const { render, screen } = require('@testing-library/react');
const { default: InputText } = require('./InputText');

describe('Inout', () => {
  it('wrap input have class input', () => {
    render(<InputText />);
    const wrapInput = screen.getByPlaceholderText(/resi/i);
    expect(wrapInput).toHaveClass('input');
  });
});
