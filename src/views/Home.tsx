import React, { useState } from 'react';

const Home: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
      <div>
        <h1>Home</h1>
        <input
            type="text"
            placeholder="Escribe algo..."
            value={inputValue}
            onChange={handleInputChange}
        />
        <p>Texto ingresado: {inputValue}</p>
      </div>
  );
};

export default Home;