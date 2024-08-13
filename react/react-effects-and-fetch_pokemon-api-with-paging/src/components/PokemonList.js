import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${offset}`
        );
        const data = await response.json();
        setPokemon(data.results);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [offset]);

  // Alternativ: Als separate Handler Funktion
  // function handlePreviousPage() {
  // if (offset > 0) {
  //   setOffset(offset - 1);
  // }}

  // function handleNextPage() {
  //   setOffset(offset + 1);
  // }

  return (
    <main>
      {offset > 0 && (
        <button type="button" onClick={() => setOffset(offset - 1)}>
          Previous Page
        </button>
      )}
      <button type="button" onClick={() => setOffset(offset + 1)}>
        Next Page
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
