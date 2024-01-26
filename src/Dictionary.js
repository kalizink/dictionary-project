import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results.js";

export default function Dictionary() {
	let [keyword, setKeyword] = useState("");
	let [results, setResults] = useState(null);

	function handleResponse(response) {
		setResults(response.data);
	}

	function search(event) {
		event.preventDefault();
		let apiKey = "2ce1e1bf2899t12d0f6obada63d3f945";
		// documentation: https://www.shecodes.io/learn/apis/dictionary //
		let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
		axios.get(apiUrl).then(handleResponse);
	}

	function handleKeywordChange(event) {
		setKeyword(event.target.value);
	}

	return (
		<div className="Dictionary">
			<form onSubmit={search}>
				<input type="search" onChange={handleKeywordChange} />
			</form>
			<Results results={results} />
		</div>
	);
}
