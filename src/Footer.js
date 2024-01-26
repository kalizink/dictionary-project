import React from "react";

export default function Footer() {
	return (
		<div className="Footer">
			Coded by
			<a href="https://github.com/kalizink" title="View profile">
				{" "}
				Kali Zink{" "}
			</a>
			and is
			<a
				href="https://github.com/kalizink/dictionary-project.git"
				title="View code">
				{" "}
				open sourced on GitHub{" "}
			</a>
			and
			<a href="https://dictionary-kz.netlify.app/" title="Netlify">
				{" "}
				hosted on Netlify
			</a>
		</div>
	);
}
