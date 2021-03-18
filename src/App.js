import React from 'react';
import styled from '@emotion/styled';

import './App.css';

import PokemonInfo from './components/PokemonInfo';
import PokemonFilter from './components/PokemonFilter';
import PokemonTable from './components/PokemonTable';
import PokemonContext from './PokemonContext';

/* 
state is what is in the store, in this case look at React.useState
and we've got filter, pokemon, selectedPokemon
*/
const pokemonReducer = (state, action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload
      };
    case 'SET_POKEMON':
      return {
        ...state,
        pokemon: action.payload
      };
    case 'SET_SELECTED_POKEMON':
      return {
        ...state,
        selectedPokemon: action.payload
      };
    default:
      throw new Error('No Action');
    // in useReducer you throw an expection if you don't know what the action is
    // in Redux you return the original state
  }
};

const Title = styled.h1`
	text-align: center;
`;

const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  grid-column-gap: 1rem;
`;

const Container = styled.div`
  margin: auto;
  width: 800px;
  padding-top: 1rem;
`;

function App() {
  // pokemonReducer and initial state, follow the ones in .useState() - see App-funcComp.js
  const [state, dispatch] = React.useReducer(pokemonReducer, {
    pokemon: [],
    filter: '',
    selectedPokemon: null
  });

  React.useEffect(() => {
    fetch('http://localhost:3000/starting-react/pokemon.json')
      .then(resp => resp.json())
      .then(data => dispatch({
        type: 'SET_POKEMON',
        payload: data
      }));
  }, []);

  if (!state.pokemon) {
    return <div>Loading data</div>;
  }

  return (
    <PokemonContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      <Container>
        <Title>Pokemon Search</Title>
        <TwoColumnLayout>
          <div>
            <PokemonFilter />
            <PokemonTable />
          </div>
          <PokemonInfo />
        </TwoColumnLayout>
      </Container>
    </PokemonContext.Provider>
  );
}

export default App;
