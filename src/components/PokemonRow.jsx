import React from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";

import PokemonType from "../PokemonType";

const PokemonRow = ({ poki, onSelect }) => (
	<tr>
		<td>{poki.name.english}</td>
		<td>{poki.type.join(", ")}</td>
		<td>
			<Button
				variant='contained'
				color='primary'
				onClick={() => onSelect(poki)}
			>
				Select
			</Button>
		</td>
	</tr>
);

PokemonRow.propTypes = {
	pokemon: PropTypes.arrayOf(PokemonType),
};

export default PokemonRow;
