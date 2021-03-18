import React from "react";
import styled from "@emotion/styled";
import { useSelector, useDispatch } from "react-redux";
// import PokemonContext from "../PokemonContext";

const Input = styled.input`
	width: 100%;
	font-size: x-large;
	padding: 0.2rem;
`;

const PokemonFilter = () => {
	const dispatch = useDispatch();
	const filter = useSelector((state) => state.filter);

	// const {
	// 	state: { filter },
	// 	dispatch,
	// } = React.useContext(PokemonContext);

	return (
		<Input
			type='text'
			value={filter}
			onChange={(event) =>
				dispatch({
					type: "SET_FILTER",
					payload: event.target.value.toLowerCase(),
				})
			}
		/>
	);
};
export default PokemonFilter;
