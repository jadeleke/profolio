import React from "react";
import mrjs from "../images/mrjs.png";
import giphyclone from "../images/giphyclone.png";
import covidtracker from "../images/covidtracker.png";
import weatherapp from "../images/weatherapp.png";
import { IoIosCall } from "react-icons/io";

export default function Projects() {
	return (
		<div id="project" className="pr-5 pt-5 pb-5 text-gray-600">
			<div className="container ml-auto mr-auto md:pl-0 md:pr-0 pl-5">
				<p className="text-4xl font-bold text-gray-500 dark:text-gray-400">
					Projects
				</p>
				<div className="lg:grid lg:grid-cols-2 mt-10 gap-5">
					<div className="rounded flex flex-col gap-5 dark:bg-gray-700 dark:text-gray-400 p-10 bg-gray-100">
						<span>
							<p className="text-lg text-gray-500">Web App</p>
							<p className="text-2xl font-bold">Mr. J's Bagels & Deli</p>
						</span>
						<img src={mrjs} alt="Project"></img>
						<span className="flex items-center gap-5">
							{" "}
							<a
								className="rounded bg-blue-500 dark:bg-gray-800 dark:text-gray-400 p-3 text-white w-28 flex justify-center"
								href="http://mrjs.mohamad.tech/"
								target="_blank"
								rel="noreferrer"
							>
								View Live
							</a>
							<a
								href="https://github.com/mbadawa/mrjs"
								target="_blank"
								rel="noreferrer"
							>
								View Code
							</a>
						</span>
					</div>
					<div className="rounded flex flex-col gap-5 dark:bg-gray-700 dark:text-gray-400 p-10 mt-5 lg:mt-0 bg-gray-100">
						<span>
							<p className="text-lg text-gray-500">Web App</p>
							<p className="text-2xl font-bold">Giphy Project</p>
						</span>
						<img src={giphyclone} alt="Project"></img>
						<span className="flex items-center gap-5">
							{" "}
							<a
								className="rounded bg-blue-500 dark:bg-gray-800 dark:text-gray-400 p-3 text-white w-28 flex justify-center"
								href="https://mbadawa.github.io/giphy-clone/"
								target="_blank"
								rel="noreferrer"
							>
								View Live
							</a>
							<a
								href="https://github.com/mbadawa/giphy-clone"
								target="_blank"
								rel="noreferrer"
							>
								View Code
							</a>
						</span>
					</div>
					<div className="rounded flex flex-col gap-5 dark:bg-gray-700 dark:text-gray-400 p-10 mt-5 bg-gray-100">
						<span>
							<p className="text-lg text-gray-500">Web App</p>
							<p className="text-2xl font-bold">COVID-19 Tracker</p>
						</span>
						<img src={covidtracker} alt="Project"></img>
						<span className="flex items-center gap-5">
							{" "}
							<a
								className="rounded bg-blue-500 dark:bg-gray-800 dark:text-gray-400 p-3 text-white w-28 flex justify-center"
								href="http://mohamad.tech/covidtracker/"
								target="_blank"
								rel="noreferrer"
							>
								View Live
							</a>
							<a
								href="https://github.com/mbadawa/covidtracker"
								target="_blank"
								rel="noreferrer"
							>
								View Code
							</a>
						</span>
					</div>
					<div className="rounded flex flex-col gap-5 bg-gray-100 dark:bg-gray-700 dark:text-gray-400 p-10 mt-5">
						<span>
							<p className="text-lg text-gray-500">Web App</p>
							<p className="text-2xl font-bold">Weather App</p>
						</span>
						<img src={weatherapp} alt="Project"></img>
						<span className="flex items-center gap-5">
							{" "}
							<a
								className="rounded bg-blue-500 dark:bg-gray-800 dark:text-gray-400 p-3 text-white w-28 flex justify-center"
								href="https://jadeleke-weatherapp.herokuapp.com/"
								target="_blank"
								rel="noreferrer"
							>
								View Live
							</a>
							<a
								href="https://github.com/jadeleke/weatherapp"
								target="_blank"
								rel="noreferrer"
							>
								View Code
							</a>
						</span>
					</div>
				</div>
				<span class="dark:bg-gray-700 dark:text-gray-400 bg-gray-100 rounded md:w-1/2 ml-auto mr-auto opacity-75 p-5 flex justify-center items-center gap-2 mt-5 flex-col">
					<p>Did you like what you see?</p>
					<a
						href="tel:23-374-3274"
						className="dark:bg-green-700 bg-green-500 p-3 text-white rounded flex items-center gap-2"
					>
						<IoIosCall />
						+233233743274
					</a>
				</span>
			</div>
		</div>
	);
}
