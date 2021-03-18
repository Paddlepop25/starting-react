import React from "react";
import useStore from "../store";

// import PokemonContext from "../PokemonContext";

const PokemonInfo = () => {
	const selectedPokemon = useStore((state) => state.selectedPokemon);
	// const {
	// 	state: { selectedPokemon },
	// } = React.useContext(PokemonContext);
	// return <p>test</p>;
	return selectedPokemon ? (
		<div>
			<h2>
				{selectedPokemon.name.english}&nbsp;({selectedPokemon.name.japanese})
			</h2>
			<table>
				<tbody>
					{console.log(selectedPokemon)}
					{Object.keys(selectedPokemon.base).map((key) => (
						<tr key={key}>
							<td>{key}:</td>
							<td>{selectedPokemon.base[key]}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	) : (
		<code>Pokemon not found</code>
	);
};

export default PokemonInfo;
