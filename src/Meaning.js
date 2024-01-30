import React from "react";
import Meaning from "./Meaning.js";
import "./Meaning.css";

export default function Results(props) {
	if (props.results) {
		return (
			<div className="Results">
				<h2> {props.results.word} </h2>

				{props.results.phonetic}
				{props.results.meanings.map(function (definition, index) {
					return (
						<div key={index}>
							<div className="definition">
								{props.results.meanings.definition}
							</div>
							<div className="example">{props.results.meanings.example} </div>
						</div>
					);
				})}
			</div>
		);
	} else {
		return null;
	}
}
