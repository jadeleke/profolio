import React from "react";
import {
	AiFillLinkedin,
	AiFillGitlab,
	AiFillGithub,
} from "react-icons/ai";

export default function Navbar() {
	return (
		<div className="p-5 top-0 sticky scroll z-50 bg-gray-100 shadow dark:bg-gray-700">
			<navbar className="flex justify-between items-center text-gray-600 dark:text-gray-400 container ml-auto mr-auto">
				<ul className="flex gap-3">
					<li>
						<a href="#project">Work</a>
					</li>
					<li>
						<a href="#about">About</a>
					</li>
					<li>
						<a href="#contact">Contact</a>
					</li>
				</ul>
				<ul className="flex gap-3 text-3xl">
					<li>
						<a href="https://www.linkedin.com/in/joseph-adeleke-27b43314" target="_blank">
							<AiFillLinkedin />
						</a>
					</li>
					<li>
						<a href="https://gitlab.com/Adeleke-joseph" target="_blank">
							<AiFillGitlab />
						</a>
					</li>
					<li>
						<a href="https://github.com/jadeleke" target="_blank">
							<AiFillGithub />
						</a>
					</li>
				</ul>
			</navbar>
		</div>
	);
}
