import React from "react";
import "./Footer.css";

export default function Footer() {
	return (
		<div className="Footer ">
			Coded by
			<a href="https://github.com/kalizink" title="View profile" target="blank">
				{" "}
				Kali Zink{" "}
			</a>
			and is
			<a
				href="https://github.com/kalizink/dictionary-project.git"
				title="View code"
				target="blank">
				{" "}
				open sourced on GitHub{" "}
			</a>
			and
			<a
				href="https://dictionary-kz.netlify.app/"
				title="Netlify"
				target="blank">
				{" "}
				hosted on Netlify
			</a>
		</div>
	);
}
