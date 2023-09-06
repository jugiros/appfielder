import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import Home from './Home';
import { Provider } from 'react-redux';
// @ts-ignore
import store from '../store';
import { validUrl } from '../utils/functions';

jest.mock('../utils/functions');

describe('Home', () => {
  it('Debería agregar una URL válida', async () => {
    (validUrl as jest.Mock).mockResolvedValue(true);

    render(
        <Provider store={store}>
          <Home />
        </Provider>
    );

    fireEvent.click(screen.getByText('Agregar URL'));
    fireEvent.change(screen.getByLabelText('Nombre'), { target: { value: 'GOOGLE' } });
    fireEvent.change(screen.getByLabelText('URL'), { target: { value: 'www.google.com' } });
    fireEvent.click(screen.getByText('Verificar'));

    await waitFor(() => {
      expect(screen.getByText('GOOGLE')).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByText('www.google.com')).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByText('EN LÍNEA')).toBeInTheDocument();
    });
  });

  it('Debería manejar la adición de una URL no válida', async () => {
    (validUrl as jest.Mock).mockResolvedValue(false);

    render(
        <Provider store={store}>
          <Home />
        </Provider>
    );

    fireEvent.click(screen.getByText('Agregar URL'));
    fireEvent.change(screen.getByLabelText('Nombre'), { target: { value: 'URL DE ERROR' } });
    fireEvent.change(screen.getByLabelText('URL'), { target: { value: 'url_invalida' } });
    fireEvent.click(screen.getByText('Verificar'));

    await waitFor(() => {
      expect(screen.getByText('URL DE ERROR')).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByText('url_invalida')).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByText('DESCONECTADO')).toBeInTheDocument();
    });
  });
});