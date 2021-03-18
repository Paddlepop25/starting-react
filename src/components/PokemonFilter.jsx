import React from "react";
import styled from "@emotion/styled";
import useStore from "../store";

// import PokemonContext from "../PokemonContext";

const Input = styled.input`
	width: 100%;
	font-size: x-large;
	padding: 0.2rem;
`;

const PokemonFilter = () => {
	const filter = useStore((state) => state.filter);
	const setFilter = useStore((state) => state.setFilter);

	// const {
	// 	state: { filter },
	// 	dispatch,
	// } = React.useContext(PokemonContext);

	return (
		<Input
			type='text'
			value={filter}
			onChange={(event) => setFilter(event.target.value)}
		/>
	);
};
export default PokemonFilter;
