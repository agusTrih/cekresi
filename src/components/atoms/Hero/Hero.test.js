const { render, screen } = require('@testing-library/react');
const { default: Home } = require('pages/Home');
const { default: Hero } = require('./Hero');

describe('Should Test Hero Component', () => {
  it('check wrap element have class hero', () => {
    render(<Hero />);
    const WrapHero = screen.getByTestId('hero');
    expect(WrapHero).toHaveClass('hero');
  });

  describe('title', () => {
    it('"Tests that heading element is displayed when title is not empty" ', () => {
      const title = 'Hello Title';
      render(<Home title={title} />);
      const titleElement = screen.getByRole('heading');
      expect(titleElement).toBeInTheDocument(title);
    });
    it('Tests that heading element is not displayed when title is empty', () => {
      render(<Home />);
      const titleElement = screen.getByRole('heading');
      expect(titleElement).toBeInTheDocument('');
    });
  });
  describe('description', () => {
    it('"Tests that paragraph element is displayed when description is not empty" ', () => {
      const description = 'Hello Description';
      render(<Home description={description} />);
      const paragraphElement = screen.getByTestId('description');
      expect(paragraphElement).toBeInTheDocument(description);
    });
    it('Tests that paragraph element is not displayed when description is empty', () => {
      render(<Home />);
      const paragraphElement = screen.getByTestId('description');
      expect(paragraphElement).toBeInTheDocument('');
    });
  });
});
