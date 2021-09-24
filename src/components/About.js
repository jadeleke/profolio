import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { DiAndroid, DiCss3, DiReact, DiPython, DiJava, DiDjango, DiBitbucket, DiGit, DiWebplatform, DiDart, DiComposer, DiPhp, 
	DiDatabase, DiFirebase, DiHeroku, DiJira, DiJenkins, DiMysql, DiNodejs, DiVisualstudio, DiGithub, DiLaravel, DiMongodb } from "react-icons/di";
import { SiJavascript, SiTailwindcss, SiMysql } from "react-icons/si";
export default function About() {
	return (
		<div
			id="about"
			className="text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700"
		>
			<div className="flex flex-col gap-5 pt-10 pb-10 container ml-auto mr-auto md:pl-0 md:pr-0 pl-5 pr-5">
				<p className="text-4xl font-bold">About Me</p>
				<p>
					Self-motivated and cheerful self taught full stack mobile developer professional with 3 years of experience. 
					Currently completed Ghana Technology University College Bachelors in Computer Engineering. Familiar with Android development,
					 Java, Kotlin, HTML, CSS, JavaScript, ReactJS, MongoDB, MySQL, Python, Django, etc.
				</p>
				<span className="flex items-center gap-4 text-4xl">
					<DiAndroid/>
					<DiJava/>
					<DiDart/>
					<AiFillHtml5 />
					<DiCss3 />
					<SiTailwindcss />
					<DiWebplatform/>
					<DiReact />
					<SiJavascript />
					<DiPython />
					<DiLaravel/>
					<DiPhp/>
					<DiNodejs/>
					<DiMongodb/>
					<DiMysql/>
					<DiFirebase/>
					<DiDatabase/>
					<DiGithub/>
					<DiComposer/> 
					<DiHeroku/>
					<DiJira/>
					<DiJenkins/>
					<DiBitbucket/>
					<DiDjango />
					<DiGit/>
					<DiVisualstudio/>
				</span>
			</div>
		</div>
	);
}
