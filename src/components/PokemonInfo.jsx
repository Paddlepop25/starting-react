import React from "react";
import { useSelector } from "react-redux";
// import PokemonContext from "../PokemonContext";

const PokemonInfo = () => {
	const selectedPokemon = useSelector((state) => state.selectedPokemon);

	// const {
	// 	state: { selectedPokemon },
	// } = React.useContext(PokemonContext);

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
	) : null;
};

export default PokemonInfo;
