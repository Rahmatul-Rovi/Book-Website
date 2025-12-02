import { useEffect, useState } from 'react'
import './App.css'

function App() {
  // Shurute system preference check kora (optional, kintu bhalo)
  const [colorMode, setColorMode] = useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  );

  // Body tag e class set kora
  useEffect(() => {
    document.body.className = colorMode === 'dark' ? 'dark-mode' : 'light-mode';
  }, [colorMode]); // colorMode change holei ei effect run hobe

  const toggleMode = () => {
    setColorMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`app-container ${colorMode}-mode`}>
      {/* Button to toggle the mode */}
      <button onClick={toggleMode}>
        Switch to {colorMode === 'light' ? 'Dark' : 'Light'} Mode
      </button>
      {/* Baki components */}
      <Header />
      <Card />
    </div>
  );
}

export default App
