import "./App.css";

import { useReducer, useState } from "react";
import { resultReducer } from "./reducers/resultReducer";



function App() {
	const [firstNumberInput, setFirstNumberInput] = useState(null);
	const [secondNumberInput, setSecondNumberInput] = useState(null);

	const [result, dispatch] = useReducer(resultReducer, 0)

	// EVENT HANDLERS
	function handleSumClick() {
		dispatch({
			type: 'sum',
			payload: { firstNumber: firstNumberInput, secondNumber: secondNumberInput }
		})
	}

	function handleSubClick() {
		dispatch({
			type: 'subtract',
			payload: { firstNumber: firstNumberInput, secondNumber: secondNumberInput }
		})
	}

	function handleMultClick() {
		dispatch({
			type: 'multiply',
			payload: { firstNumber: firstNumberInput, secondNumber: secondNumberInput }
		})
	}

	function handleDivClick() {
		dispatch({
			type: 'divide',
			payload: { firstNumber: firstNumberInput, secondNumber: secondNumberInput }
		})
	}

	return (
		<div className="App">
			<div
				style={{
					height: "100vh",
					display: "flex",
					justifyContent: "center",
					flexDirection: "column",
					alignItems: "center",
					background: "teal",
				}}
			>
				{/* FIRST INPUT */}
				<label>First Number</label>
				<input
					value={firstNumberInput}
					onChange={(e) => setFirstNumberInput(e.target.value)}
				/>

				{/* SECOND INPUT */}
				<label>Second Number</label>
				<input
					value={secondNumberInput}
					onChange={(e) => setSecondNumberInput(e.target.value)}
				/>

				<button onClick={handleSumClick}>sum</button>

				<button onClick={handleSubClick}>subtract</button>

				<button onClick={handleMultClick}>multiply</button>

				<button onClick={handleDivClick}>divide</button>

				<hr />

				<h2>{result}</h2>
			</div>
		</div>
	);
}

export default App;
