import { render } from '@testing-library/react';
import { fireEvent, screen } from '@testing-library/dom';

import { Sidebar } from 'widgets/Sidebar/ui/Sidebar';

describe('Sidebar', () => {
  test('render', () => {
    render(<Sidebar />);
    screen.debug();
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('toggle', () => {
    render(<Sidebar />);
    const sidebar = screen.getByTestId('sidebar');
    const toggleButton = screen.getByTestId('sidebar-toggle');

    expect(toggleButton).toBeInTheDocument();

    fireEvent.click(toggleButton);
    expect(sidebar).toHaveClass('collapsed');

    fireEvent.click(toggleButton);
    expect(sidebar).not.toHaveClass('collapsed');
  });
});
