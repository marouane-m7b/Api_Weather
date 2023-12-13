import "./App.css";
import { Button, Container, ThemeProvider, Typography, createTheme } from "@mui/material";
import CloudIcon from "@mui/icons-material/Cloud"

const theme = createTheme({
	typography: {
		fontFamily: "IBM",
	}
})

function App() {

	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<Container maxWidth="sm">
					{/* Container */}
					<div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection:"column" }}>
						{/* Card */}
						<div
							dir="rtl"
							style={{ backgroundColor: "rgb(28 52 91 / 36%)", color: "white", padding: "10px", borderRadius: "15px", boxShadow: "0px 11px 1px rgba(0,0,0,0.05)", width: "100%" }}>
							{/* Content */}
							<div>
								{/* City And Time */}
								<div style={{ display: "flex", alignItems: "end", justifyContent: "start" }} dir="rtl">
									<Typography variant="h2" style={{ marginRight: "20px" }}>
										الدار البيضاء
									</Typography>
									<Typography variant="h5" style={{ marginRight: "20px" }}>
										15 / 22 / مارس
									</Typography>
								</div>
								{/* City And Time */}
								<hr />
								{/* Degree + Icon */}
								<div style={{ display: "flex", justifyContent: "space-between", padding: "0px 20px" }}>
									{/* Dgree And Description */}
									<div>
										{/* Temp */}
										<div>
											<Typography variant="h1" style={{ textAlign: "right" }}>
												38
											</Typography>
											{/* IMG */}
											{/*==== IMG ====*/}
										</div>
										{/*==== Temp ====*/}

										<Typography variant="h6" style={{textAlign:"right"}}>
											broken clouds
										</Typography>
										{/* Min And Max */}
										<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
											<h5>الصغرى : 45</h5>
											<h5 style={{ margin:"0 10px" }}>|</h5>
											<h5>الكبرى : 23</h5>
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
					<Button variant="text" style={{color:"white", marginTop:"10px"}}>انجليزي</Button>
					</div>
					{/*==== Container ====*/}
				</Container>
			</ThemeProvider>
		</div>
	);
}

export default App;
