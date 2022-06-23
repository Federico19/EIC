//import logo from './logo.svg';
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

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          2
        </a>
      </header>
    </div>
  );
}
*/

export default App;
