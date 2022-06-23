import React from "react";
import "./App.css";
import Sum from "./components/Sum.js";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h2>2 y 2 son {Sum(2,2)}!</h2>
				{/* <img src="https://qph.fs.quoracdn.net/main-qimg-bd2bccb58dc44e35ab3befe5508e40c5-pjlq"
					alt= "El gallo Claudio"></img> */}
			</header>
		</div>
	);
}
export default App;
