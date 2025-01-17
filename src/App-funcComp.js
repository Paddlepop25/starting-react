import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Button } from '@material-ui/core';

// components
const PokemonRow = ({ poki, onSelect }) => (
  <tr>
    <td>{poki.name.english}</td>
    <td>{poki.type.join(", ")}</td>
    <td>
      <Button variant="contained" color="primary" onClick={() => onSelect(poki)}>Select</Button>
    </td>
  </tr>
);

// propTypes
PokemonRow.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.shape({
      english: PropTypes.string.isRequired
    }),
    type: PropTypes.arrayOf(PropTypes.string.isRequired),
    onSelect: PropTypes.func.isRequired
  })
};

const PokemonInfo = ({ name, base }) => (
  <div>
    <h1>{name.english}</h1>
    <table>
      {
        Object.keys(base).map(key => (
          <tbody key={key}>
            <tr>
              <td>{key}</td>
              <td>{base[key]}</td>
            </tr>
          </tbody>
        ))
      }
    </table>
  </div>
);

PokemonInfo.propTypes = {
  name: PropTypes.shape({
    english: PropTypes.string.isRequired
  }),
  base: PropTypes.shape({
    HP: PropTypes.number.isRequired,
    Attack: PropTypes.number.isRequired,
    Defense: PropTypes.number.isRequired,
    "Sp. Attack": PropTypes.number.isRequired,
    "Sp. Defense": PropTypes.number.isRequired,
    Speed: PropTypes.number.isRequired
  })
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

const Input = styled.input`
  width: 100%;
	font-size: x-large;
	padding: 0.2rem;
`;

function App() {
  const [filter, setFilter] = React.useState('');
  const [pokemon, setPokemon] = React.useState([]);
  const [selectedItem, setSelectedItem] = React.useState(null);

  React.useEffect(() => {
    fetch('http://localhost:3000/starting-react/pokemon.json')
      .then(resp => resp.json())
      .then(data => setPokemon(data));
  }, []);

  return (
    <Container>
      <Title>Pokemon Search</Title>
      <Input type="text" value={filter} onChange={event => setFilter(event.target.value.toLowerCase())} />
      <TwoColumnLayout>
        <div>
          <table width='100%'>
            <thead>
              <tr>
                <th>Pokemon</th>
                <th>Power</th>
              </tr>
            </thead>
            <tbody>
              {pokemon
                .filter(pokemon => pokemon.name.english.toLowerCase().includes(filter))
                .slice(0, 15)
                .map((poki, index) => (
                  <PokemonRow poki={poki} key={poki.id + index} onSelect={poki => setSelectedItem(poki)}>
                  </PokemonRow>
                ))}
            </tbody>
          </table>
        </div>
        {selectedItem && <PokemonInfo {...selectedItem} />}
      </TwoColumnLayout>
    </Container>
  );
}

export default App;
