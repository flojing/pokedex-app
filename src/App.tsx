import "./App.css";
import { useState } from "react";
import PokemonCard from "./components/PokemonCard";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const handleClickPrev = () => {
    setPokemonIndex(pokemonIndex - 1);
  };
  const handleClickNext = () => {
    setPokemonIndex(pokemonIndex + 1);
  };
  return (
    <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      <button
        type="button"
        onClick={handleClickPrev}
        disabled={pokemonIndex === 0}
      >
        Précédent
      </button>
      <button
        type="button"
        onClick={handleClickNext}
        disabled={pokemonIndex === pokemonList.length - 1}
      >
        Suivant
      </button>
    </div>
  );
}

export default App;
