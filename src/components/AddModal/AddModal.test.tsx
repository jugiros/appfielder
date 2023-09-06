import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AddModal from "./AddModal";

describe('AddModal', () => {
  test('renders AddModal component', () => {
    // Renderiza el componente
    render(<AddModal open={true} onClose={() => {}} onAdd={() => {}} />);

    // Verifica que el componente se haya renderizado correctamente
    const modalTitle = screen.getByText('Ingresa la URL');
    expect(modalTitle).toBeInTheDocument();

    // Verifica que el botón "Agregar" esté presente
    const addButton = screen.getByRole('button', { name: 'Agregar' });
    expect(addButton).toBeInTheDocument();
  });

  test('calls onAdd and onClose functions when button is clicked', () => {
    // Crea funciones simuladas
    const onAddMock = jest.fn();
    const onCloseMock = jest.fn();

    // Renderiza el componente con las funciones simuladas
    render(<AddModal open={true} onClose={onCloseMock} onAdd={onAddMock} />);

    // Ingresa una URL en el campo de texto
    const urlInput = screen.getByLabelText('URL');
    fireEvent.change(urlInput, { target: { value: 'https://example.com' } });

    // Da clic en el botón "Agregar"
    const addButton = screen.getByRole('button', { name: 'Agregar' });
    fireEvent.click(addButton);

    // Verifica que las funciones onAdd y onClose hayan sido llamadas
    expect(onAddMock).toHaveBeenCalledWith('https://example.com');
    expect(onCloseMock).toHaveBeenCalled();
  });
});