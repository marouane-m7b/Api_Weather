import { ThemeProvider, createTheme } from "@mui/material";
import "./App.css";
import Test from "./Test";

const theme = createTheme({
	typography: {
		fontFamily: "IBM",
	}
})

function App() {

	return (
		<div className="App">
			<ThemeProvider theme={theme}>
			<Test></Test>
			</ThemeProvider>
		</div>
	);
}

export default App;
