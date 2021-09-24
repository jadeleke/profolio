import React from "react";
import emailjs from "emailjs-com";
import { useState } from "react";
export default function Contact() {
	const [messageSent, setMessageSent] = useState("");
	function sendEmail(e) {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_urypbi9",
				"template_b94i0v8",
				e.target,
				"user_jISp8SMcc9yynWi4Kwfcl"
			)
			.then(
				(result) => {
					console.log(result.text);
					setMessageSent(
						"Your message has been sent successfully. I will try to reach out to as soon as possible thank you!"
					);
				},
				(error) => {
					console.log(error.text);
				}
			);
	}
	return (
		<div
			id="contact"
			className="dark:text-gray-400 container p-10 ml-auto mr-auto md:pl-0 md:pr-0 "
		>
			<form onSubmit={sendEmail}>
				<span className="flex flex-col gap-2">
					<label for="name">Full Name</label>
					<input
						id="name"
						autocomplete="name"
						type="text"
						name="fullName"
						className="bg-gray-100 rounded dark:bg-gray-700 p-2 focus:outline-none"
					></input>
				</span>
				<span className="flex flex-col gap-2 mt-2">
					<label for="email">Email</label>
					<input
						id="email"
						autocomplete="email"
						name="email"
						className="rounded bg-gray-100 dark:bg-gray-700 p-2 focus:outline-none"
					></input>
				</span>
				<span className="flex flex-col gap-2 mt-2">
					<label for="subject">Subject</label>
					<input
						type="text"
						id="subject"
						name="subject"
						autocomplete="email"
						className="rounded bg-gray-100 dark:bg-gray-700 p-2 focus:outline-none"
					></input>
				</span>
				<span className="flex flex-col gap-2 mt-2">
					<label for="subject">Message</label>
					<textarea
						type="text"
						name="message"
						id="subject"
						autocomplete="email"
						className="bg-gray-100 rounded resize-none h-28 dark:bg-gray-700 p-2 focus:outline-none"
					></textarea>
				</span>
				<button
					type="submit"
					value="Send"
					className="mt-2 bg-blue-500 dark:bg-gray-700 dark:text-gray-400 rounded text-gray-100 p-3 w-28 flex justify-center"
				>
					Send
				</button>

				<p className="flex items-center gap-3 mt-2 p-3 text-green-600 md:w-2/3 opacity-75">
					{messageSent}
				</p>
			</form>
		</div>
	);
}
