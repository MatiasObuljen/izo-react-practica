
import './App.css';
import Menu from './Menu';
import { useState } from 'react';
import MainContent from './MainContent';
import { PracticeProvider } from './practica_5/PracticeContext';

function App() {
  const [practiceSelected, setPracticeSelected] = useState('#practica_1');
  // JSX
  return (
    <PracticeProvider>
      <div>
        <Menu onOptionSelected={(t) => { setPracticeSelected(t) }} />
        <MainContent practiceSelected={practiceSelected} />
      </div>
    </PracticeProvider>
  );
}

export default App;