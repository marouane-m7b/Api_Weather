import "./App.css";
import { Box, Container, FormControl, InputLabel, MenuItem, Select, ThemeProvider, Typography, createTheme } from "@mui/material";
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
	const [city, setCity] = useState("Casablanca")
	const [lat, setLat] = useState(33.5731)
	const [long, setLong] = useState(-7.5898)
	const [cities] = useState([
		{
			name: "New York",
			latitude: 40.7128,
			longitude: -74.0060
		},
		{
			name: "London",
			latitude: 51.5074,
			longitude: -0.1278
		},
		{
			name: "Tokyo",
			latitude: 35.6895,
			longitude: 139.6917
		},
		{
			name: "Paris",
			latitude: 48.8566,
			longitude: 2.3522
		},
		{
			name: "Casablanca",
			latitude: 33.5731,
			longitude: -7.5898
		},
		{
			name: "Los Angeles",
			latitude: 34.0522,
			longitude: -118.2437
		},
		{
			name: "Berlin",
			latitude: 52.5200,
			longitude: 13.4050
		},
		{
			name: "Sydney",
			latitude: -33.8688,
			longitude: 151.2093
		},
		{
			name: "Rome",
			latitude: 41.9028,
			longitude: 12.4964
		},
		{
			name: "Toronto",
			latitude: 43.6532,
			longitude: -79.3832
		},
		{
			name: "Mumbai",
			latitude: 19.0760,
			longitude: 72.8777
		},
		{
			name: "Barcelona",
			latitude: 41.3851,
			longitude: 2.1734
		},
		{
			name: "Dubai",
			latitude: 25.276987,
			longitude: 55.296249
		},
		{
			name: "Beijing",
			latitude: 39.9042,
			longitude: 116.4074
		},
		{
			name: "San Francisco",
			latitude: 37.7749,
			longitude: -122.4194
		},
		{
			name: "Moscow",
			latitude: 55.7558,
			longitude: 37.6176
		},
		{
			name: "Rio de Janeiro",
			latitude: -22.9068,
			longitude: -43.1729
		},
		{
			name: "Cairo",
			latitude: 30.0444,
			longitude: 31.2357
		},
		{
			name: "Stockholm",
			latitude: 59.3293,
			longitude: 18.0686
		},
		{
			name: "Seoul",
			latitude: 37.5665,
			longitude: 126.9780
		},
		{
			name: "Amsterdam",
			latitude: 52.3676,
			longitude: 4.9041
		},
	])

	const JsxCities = cities.map((c, index) => {
		return <MenuItem key={index} style={{ color: "white", backgroundColor: "#0052d0" }} value={c.name}>{c.name}</MenuItem>
	})


	const [temp, setTemp] = useState({
		number: 0,
		description: "",
		min: 0,
		max: 0,
		icon: ""
	})

	useEffect(() => {
		for (const c of cities) {
			if (c.name === city) {
				setLat(() => c.latitude)
				setLong(() => c.longitude)
				console.log('city' + city);
				break;
			}
		}
	}, [cities, city])

	useEffect(() => {
		axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=03a8280ea3f54d3e3e156228168d5f6a`)
			.then((res) => {
				const num = (res.data.main.temp)
				const minimum = (res.data.main.temp_min)
				const maximum = (res.data.main.temp_max)
				const newTemp = {
					number: Math.round(num - 272.15),
					description: (res.data.weather[0].description),
					min: Math.round(minimum - 272.15),
					max: Math.round(maximum - 272.15),
					icon: (res.data.weather[0].icon)
				}
				setTemp(newTemp);
				console.log("Number:", num);
				console.log("Minimum:", minimum);
				console.log("Maximum:", maximum);

				// If you want to log the entire object
				console.log("New Temp Object:", newTemp);
			})
			.catch((err) => {
				return
			})
			.finally(() => {
				return
			})

	}, [lat, long])

	function handleChange(e) {
		setCity(e.target.value)
	}

	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<Container maxWidth="sm">
					{/* Container */}
					<div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
						<Box style={{ color: "white" }} sx={{ minWidth: 120 }}>
							<FormControl variant="filled" sx={{ m: 1, minWidth: 120 }} style={{ color: "white" }}>
								<InputLabel style={{ color: "white" }} id="demo-simple-select-filled-label">City</InputLabel>
								<Select
									style={{ color: "white", backgroundColor: "#0052d0" }}
									labelId="demo-simple-select-filled-label"
									id="demo-simple-select-filled"
									value={city}
									label="City"
									onChange={handleChange}
								>
									{JsxCities}
								</Select>
							</FormControl>
						</Box>
						{/* Card */}
						<div
							style={{ backgroundColor: "rgb(28 52 91 / 36%)", color: "white", padding: "10px", borderRadius: "15px", boxShadow: "0px 11px 1px rgba(0,0,0,0.05)", width: "100%" }}>
							{/* Content */}
							<div>
								{/* City And Time */}
								<div style={{ display: "flex", alignItems: "end", justifyContent: "start" }}>
									<Typography variant="h2" style={{ marginRight: "20px" }}>
										{city}
									</Typography>
									<Typography variant="h6" style={{ marginRight: "20px" }}>
										{today.getDate()} /{today.getMonth() + 1} /{today.getFullYear()}
									</Typography>
								</div>
								{/* City And Time */}
								<hr />
								{/* Degree + Icon */}
								<div style={{ display: "flex", justifyContent: "space-between", padding: "0px 20px" }}>
									{/* Dgree And Description */}
									<div>
										{/* Temp */}
										<div style={{ display: "flex" }}>
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
