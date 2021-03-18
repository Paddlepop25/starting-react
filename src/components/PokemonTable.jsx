import React from "react";
import PokemonRow from "./PokemonRow";
import PokemonContext from "../PokemonContext";

const PokemonTable = () => {
	const {
		state: { pokemon, filter },
		dispatch,
	} = React.useContext(PokemonContext);

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
							onSelect={(poki) =>
								dispatch({
									type: "SET_SELECTED_POKEMON",
									payload: poki,
								})
							}
						/>
					))}
			</tbody>
		</table>
	);
};

export default PokemonTable;
