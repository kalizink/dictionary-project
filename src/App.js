import "./App.css";
import logo from "./logo.png";
import Footer from "./Footer";
import Dictionary from "./Dictionary.js";

export default function App() {
	return (
		<div className="App">
			<div className="container">
				<header className="App-header">
					<img src={logo} className="App-logo img-fluid" alt="logo" />
				</header>
				<main>
					<Dictionary defaultKeyword="sunset" />
				</main>
				<Footer />
			</div>
		</div>
	);
}
