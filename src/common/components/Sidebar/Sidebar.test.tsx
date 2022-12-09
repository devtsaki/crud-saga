import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Constants from 'common/constants';
import Sidebar from './Sidebar';

describe('Sidebar component', () => {
  it("will render 'Cats'", () => {
    render(<Sidebar links={Constants.ROUTES} />, { wrapper: MemoryRouter });

    const element = screen.getByText('Cats');

    expect(element).toBeTruthy();
  });
});
