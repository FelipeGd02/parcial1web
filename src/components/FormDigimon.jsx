import { useState } from 'react';

export const FormDigimon = () => {
  const [inputValue, setInputValue] = useState(''); 
  const [inputImage, setInputImage] = useState(''); 
  const [digimon, setDigimon] = useState([]); 
  const [imagen, setImagen] = useState([]); 

  const saveDigimon = (e) => {
    e.preventDefault();
    setDigimon([...digimon, imagen, inputValue, inputImage]);
  };

  const saveImagen = (e) => {
    e.preventDefault();
    setImagen([...imagen, inputValue, inputImage]);
  };

  const deleteDigimon = (indexDigimon) => {
    const digimonFiltered = digimon.filter((_, index) => indexDigimon !== index);
    setDigimon(digimonFiltered);
  };

  const deleteImagen = (indexImagen) => {
    const imagenFiltered = imagen.filter((_, index) => indexImagen !== index);
    setImagen(imagenFiltered);
  };

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="nombre del digimon"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <input
          type="text"
          placeholder="imagen"
          onChange={(e) => setInputImage(e.target.value)}
        />
        <button onClick={(e) => saveDigimon(e)}>Agregar</button>
      </form>
      <div>
        <ul>
          {digimon.map((digimon, index) => (
            <>
              <li>{digimon}</li>
              <button onClick={() => deleteDigimon(index)}>Eliminar</button>
            </>
          ))}
        </ul>
      </div>
    </>
  );
};