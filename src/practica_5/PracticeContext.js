import React, { createContext, useState, useContext } from 'react';

const PracticeContext = createContext();

export const PracticeProvider = ({ children }) => {
  const [selectedPractice, setSelectedPractice] = useState(null);

  const selectPractice = (practice) => {
    setSelectedPractice(practice);
  };

  return (
    <PracticeContext.Provider value={{ selectedPractice, selectPractice }}>
      {children}
    </PracticeContext.Provider>
  );
};

// Un gancho personalizado para acceder al contexto
export const usePracticeContext = () => {
  return useContext(PracticeContext);
};
