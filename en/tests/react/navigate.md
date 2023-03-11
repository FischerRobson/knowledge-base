```js
import '@testing-library/jest-dom';
import { getByText, render, fireEvent } from '@testing-library/react';
import React from 'react';
import { createMemoryHistory } from 'history';
import { MemoryRouter } from 'react-router-dom';
import { Providers } from '../../hooks';
import { Benefits } from '../../pages/Benefits';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe(`${Benefits.name} component`, () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    history.push('/route');
    const { debug, getAllByText } = render(
      <Providers>
        <Benefits />
      </Providers>,
    );
    // debug();

    expect(getAllByText('Vantagens e parcerias')).toBeTruthy();
    expect(getAllByText('Beneficiários do INSS')).toBeTruthy();
    expect(getAllByText('Aqui tem ofertas e benefícios exclusivos para você!')).toBeTruthy();
  });

  it('should redirect user to inss by click', () => {
    const { getByTitle } = render(
      <MemoryRouter>
        <Providers>
          <Benefits />
        </Providers>
      </MemoryRouter>,
    );
    const card = getByTitle('inss-container');
    fireEvent.click(card);

    expect(mockHistoryPush).toHaveBeenCalledWith('/inss-benefits');
  });

  it('should redirect user to inss by key down', () => {
    const { getByTitle } = render(
      <MemoryRouter>
        <Providers>
          <Benefits />
        </Providers>
      </MemoryRouter>,
    );
    const card = getByTitle('inss-container');
    fireEvent.keyDown(card);

    expect(mockHistoryPush).toHaveBeenCalledWith('/inss-benefits');
  });
});

```
