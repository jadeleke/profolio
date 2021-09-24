import React from "react";
export default function Footer() {
	return (
		<div className="bg-gray-100 text-center pt-28 pb-28 dark:text-gray-400 pl-5 pr-5 dark:bg-gray-700">
			<div className="flex flex-col gap-2">
				<p className="font-extrabold text-transparent lg:h-20 text-4xl md:text-5xl bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500 dark:from-yellow-400 dark:to-pink-300">
					Got an Idea? Looking for a freelancer?
				</p>
				<p className="text-lg flex items-center justify-center gap-1">
					Send me a message via an
				</p>
				<a href="mailto:akdeljoseph@outlook.com" className="underline un">
					email
				</a>
			</div>
		</div>
	);
}
