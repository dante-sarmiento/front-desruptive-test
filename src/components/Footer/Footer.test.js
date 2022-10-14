import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer test', () => {
  test('esperamos que el componente sea renderizado', () => {
    render(<Footer />);

    const element = screen.getByTestId('footer-test');

    expect(element).toBeInTheDocument();
  });
});
