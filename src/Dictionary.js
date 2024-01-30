import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results.js";

export default function Dictionary(props) {
	let [keyword, setKeyword] = useState(props.defaultKeyword);
	let [results, setResults] = useState(null);
	let [loaded, setLoaded] = useState(false);

	function handleResponse(response) {
		console.log(response.data);
		setResults(response.data);
	}

	function search() {
		// documentation: https://www.shecodes.io/learn/apis/dictionary //
		let apiKey = "2ce1e1bf2899t12d0f6obada63d3f945";
		let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

		axios.get(apiUrl).then(handleResponse);
	}

	function handleSubmit(event) {
		event.preventDefault();
		search();
	}

	function handleKeywordChange(event) {
		setKeyword(event.target.value);
	}

	function load() {
		setLoaded(true);
		search();
	}

	if (loaded) {
		return (
			<div className="Dictionary">
				<section>
					<h1>What word do you want to look up?</h1>
					<form onSubmit={handleSubmit}>
						<input
							type="search"
							onChange={handleKeywordChange}
							defaultValue={props.defaultKeyword}
						/>
					</form>
					<div className="hint">suggested words: sunset, yoga, plant...</div>
				</section>
				<Results results={results} />
			</div>
		);
	} else {
		load();
		return "Loading...";
	}
}
