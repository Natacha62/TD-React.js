import React, {useState, useEffect} from 'react';
import superHeros from './SuperHeros.json';

function App() {
  const nom = 'Natacha';
  const [compteur, setCompteur] = useState(0);
  const [recherche, setRecherche] = useState('');

  useEffect(() => {
    document.title = `Compteur de clic : ${compteur}`;
  }, [compteur]);

  const herosFiltres = superHeros.filter(heros =>
    heros.name.toLowerCase().includes(recherche.toLowerCase())
  );

  return (
    <div>
      <h1>Bonjour {nom}, je découvre React !</h1>

      <p>Compteur : {compteur}</p>
      <button onClick={() => setCompteur(compteur + 1)}>+</button>
      <button onClick={() => setCompteur(0)}>Réinitialiser</button>

      <p>Il y a {superHeros.length} super-héros dans la base.</p>

      <input
        type="text"
        placeholder="Rechercher un super-héros"
        value={recherche}
        onChange={(e) => setRecherche(e.target.value)}
      />

      <ul>
        {herosFiltres.map(heros => (
          <li key={heros.id}>{heros.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
