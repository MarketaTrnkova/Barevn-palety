import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { palettes } from './palettes';
import { Palette } from './components/Palette'

const App = () => {
  return (
    <div className="container">
      <header>
        <h1>Barevné palety</h1>
      </header>
      <main>
       {
        palettes.map((paleta)=>{ 
          return(
            <Palette 
              key={paleta.name} 
              name={paleta.name} 
              image={paleta.image} 
              attribution={paleta.attribution} 
              colors={paleta.colors} 
              direction={paleta.direction} 
              description={paleta.description}
            />
          )
        })
       }
      </main>
      <footer>
        <p>Czechitas, React domácí úkol č. 1</p>
      </footer>
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
