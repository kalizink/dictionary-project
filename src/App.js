import "./App.css";
import logo from "./logo.png";
import Footer from "./Footer";

export default function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo img-fluid" alt="logo" />
			</header>
			<Footer />
		</div>
	);
}
