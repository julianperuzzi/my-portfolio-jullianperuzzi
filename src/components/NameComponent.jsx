import React, { useState, useEffect } from 'react';

const NameComponent = () => {
  const [name, setName] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const typingSpeed = 200; // Velocidad de escritura en milisegundos

  const words = ['Julian... ', 'Developer...', '< />...']; // Palabras a escribir

  useEffect(() => {
    const type = () => {
      const currentWord = words[currentIndex];
      if (!isDeleting) {
        // Escribir la palabra
        setName((prev) => currentWord.substring(0, prev.length + 1));
        if (name === currentWord) {
          // Comenzar a borrar después de escribir la palabra completa
          setIsDeleting(true);
        }
      } else {
        // Borrar la palabra
        setName((prev) => currentWord.substring(0, prev.length - 1));
        if (name === '') {
          // Cambiar a la siguiente palabra después de borrar completamente
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev === words.length - 1 ? 0 : prev + 1));
        }
      }
    };

    const intervalId = setInterval(type, typingSpeed);

    // Devolver una función de limpieza para limpiar el intervalo
    return () => clearInterval(intervalId);
  }, [name, currentIndex, isDeleting, words, typingSpeed]); // Dependencias del efecto

  return (
    <div className="">
      <div className="">
        <h1 className="name">Hi, I'm {name}</h1>
      </div>
    </div>
  );
};

export default NameComponent;
