export function resultReducer(resultState, action) {
	const { firstNumber, secondNumber } = action.payload
	switch (action.type) {
		case ("sum"):
			return Number(firstNumber) + Number(secondNumber)
		case ("subtract"):
			return Number(firstNumber) - Number(secondNumber)
		case ("multiply"):
			return Number(firstNumber) * Number(secondNumber)
		case ("divide"):
			return Number(firstNumber) / Number(secondNumber)
		default:
			return 0
	}
}