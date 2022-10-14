import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar test', () => {
  test('esperamos que el componente sea renderizado', () => {
    render(<Navbar />);

    const element = screen.getByText('Mercado');

    expect(element).toBeInTheDocument();
  });
});
