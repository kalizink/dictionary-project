import React from "react";
import Synonyms from "./Synonyms.js";

export default function Meaning(props) {
	console.log(props.meaning);
	return (
		<div className="Meaning">
			<h3>{props.meaning.partOfSpeech}</h3>
			<p>
				<strong>Definition: </strong>
				{props.meaning.definition}
			</p>
			<p>
				<strong>Example: </strong>
				<em>{props.meaning.example}</em>
				<Synonyms synonyms={props.meaning.synonyms} />
			</p>
		</div>
	);
}
