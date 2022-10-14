import { render, screen } from '@testing-library/react';
import Table from './Table';

describe('Table test', () => {
  test('Renderizado del componente', () => {
    render(<Table/>);

    const element = screen.getByTestId('table-element');

    expect(element).toBeInTheDocument();
  });
});
