import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results.js";
import Photos from "./Photos.js";

export default function Dictionary(props) {
	let [keyword, setKeyword] = useState(props.defaultKeyword);
	let [results, setResults] = useState(null);
	let [loaded, setLoaded] = useState(false);
	let [photos, setPhotos] = useState(null);

	function handleResponse(response) {
		setResults(response.data);
	}

	function handlePexelsResponse(response) {
		setPhotos(response.data.photos);
	}

	function search() {
		// documentation: https://www.shecodes.io/learn/apis/dictionary //
		let apiKey = "2ce1e1bf2899t12d0f6obada63d3f945";
		let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
		axios.get(apiUrl).then(handleResponse);

		let pexeslsApiKey =
			"mIBNhPBEKt02TK9IoxxcIcaPYZJ2Th5X89ZGw9B4myOuTelkX5P1cGFm";
		let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
		axios
			.get(pexelsApiUrl, {
				method: "GET",
				headers: {
					Authorization: `${pexeslsApiKey}`,
				},
			})
			.then(handlePexelsResponse);
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
				<Photos photos={photos} />
			</div>
		);
	} else {
		load();
		return "Loading...";
	}
}
