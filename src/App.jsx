import { useState } from 'react';
import NavBar from '../src/components/common/NavBar';
import MainContent from './components/common/MainSection';

function App() {
  return (
    <>
      <div>
        <NavBar />
        <MainContent />
      </div>
    </>
  );
}

export default App;
