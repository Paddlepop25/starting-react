import React from "react";
import PokemonRow from "./PokemonRow";
import useStore from "../store";
// import PokemonContext from "../PokemonContext";

const PokemonTable = () => {
	const pokemon = useStore((state) => state.pokemon);
	const filter = useStore((state) => state.filter);
	const setSelectedPokemon = useStore((state) => state.setSelectedPokemon);

	// const {
	// 	state: { pokemon, filter },
	// 	dispatch,
	// } = React.useContext(PokemonContext);

	return (
		<table width='100%'>
			<tbody>
				{pokemon
					.filter(({ name: { english } }) =>
						english.toLowerCase().includes(filter.toLowerCase())
					)
					.slice(0, 15)
					.map((poki, index) => (
						<PokemonRow
							key={poki.name + index}
							poki={poki}
							onSelect={(poki) => setSelectedPokemon(poki)}
						/>
					))}
			</tbody>
		</table>
	);
};

export default PokemonTable;
