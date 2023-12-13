import "./App.css";
import { Container, ThemeProvider, Typography, createTheme } from "@mui/material";
import CloudIcon from "@mui/icons-material/Cloud"
import { useEffect, useState } from "react";
import axios from "axios";

const theme = createTheme({
	typography: {
		fontFamily: "IBM",
	}
})

function App() {
	const today = new Date()
	const [temp, setTemp] = useState({
		number: 0,
		description: "",
		min: 0,
		max: 0,
		icon: ""
	})
	useEffect(() => {
		axios.get("https://api.openweathermap.org/data/2.5/weather?lat=33.589886&lon=-7.603869&appid=03a8280ea3f54d3e3e156228168d5f6a")
			.then((res) => {
				const newTemp = {
					number: (res.data.main.temp - 272, 15),
					description: (res.data.weather[0].description),
					min: (res.data.main.temp_min - 272, 15),
					max: (res.data.main.temp_max - 272, 15),
					icon: (res.data.weather[0].icon)
				}
				setTemp(newTemp);
				console.log(newTemp);
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => {
			})

	}, [])

	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<Container maxWidth="sm">
					{/* Container */}
					<div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
						{/* Card */}
						<div
							style={{ backgroundColor: "rgb(28 52 91 / 36%)", color: "white", padding: "10px", borderRadius: "15px", boxShadow: "0px 11px 1px rgba(0,0,0,0.05)", width: "100%" }}>
							{/* Content */}
							<div>
								{/* City And Time */}
								<div style={{ display: "flex", alignItems: "end", justifyContent: "start" }}>
									<Typography variant="h2" style={{ marginRight: "20px" }}>
										Casablanca
									</Typography>
									<Typography variant="h6" style={{ marginRight: "20px" }}>
										{today.getDate()} /{today.getMonth()+1} /{today.getFullYear()}
									</Typography>
								</div>
								{/* City And Time */}
								<hr />
								{/* Degree + Icon */}
								<div style={{ display: "flex", justifyContent: "space-between", padding: "0px 20px" }}>
									{/* Dgree And Description */}
									<div>
										{/* Temp */}
										<div style={{ display:"flex" }}>
											<Typography variant="h1" style={{ textAlign: "left" }}>
												{temp.number}
											</Typography>
											{/* IMG */}
											<img src={`https://openweathermap.org/img/wn/${temp.icon}@2x.png`} alt="" />
											{/*==== IMG ====*/}
										</div>
										{/*==== Temp ====*/}

										<Typography variant="h6" style={{ textAlign: "left" }}>
											{temp.description}
										</Typography>
										{/* Min And Max */}
										<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
											<h5>min: {temp.min}</h5>
											<h5 style={{ margin: "0 10px" }}>|</h5>
											<h5>max: {temp.max}</h5>
										</div>
										{/* Min And Max */}
									</div>
									{/*==== Dgree And Description ====*/}
									<CloudIcon style={{ fontSize: "200px", color: "white" }}></CloudIcon>
								</div>
								{/*==== Degree + Icon ====*/}
							</div>
							{/*==== Content ====*/}
						</div>
						{/*==== Card ====*/}
					</div>
					{/*==== Container ====*/}
				</Container>
			</ThemeProvider>
		</div>
	);
}

export default App;
