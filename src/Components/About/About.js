import React from "react";
import {
	MapIcon,
	QrCodeIcon,
	RocketLaunchIcon,
} from "@heroicons/react/20/solid";
import manWithPhone from '../../Assets/manWithScooter/scooter-rental-1.JPG';
import './About.scss'

const features = [
	{
		name: "Locate",
		description:
			"Using a simple app on your smartphone, find a scooter nearby. With real-time tracking, finding a scooter is as easy as checking your phone.",
		icon: MapIcon,
	},
	{
		name: "Scan",
		description:
			"Once you've found your scooter, unlocking it is a breeze. Simply open the app and scan the QR code on the scooter to unlock it and start your ride",
		icon: QrCodeIcon,
	},
	{
		name: "Ride",
		description:
			"You're all set! Hop on the scooter and ride. Enjoy the freedom of mobility. When you're done, park the scooter responsibly and end your ride on the app. It's that simple!",
		icon: RocketLaunchIcon,
	},
];

export default function About() {
	return (
		<div className="overflow-hidden bg-white py-24 sm:py-32">
			<div className="mx-auto max-w-7xl md:px-6 lg:px-8">
				<div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
					<div className="px-6 lg:px-0 lg:pr-4 lg:pt-4">
						<div className="text-container mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
							<h2 className="get-started text-base font-semibold leading-7 text-indigo-600">
								Get Started
							</h2>
							<p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
								How it Works?
							</p>
							<p className="mt-6 text-lg leading-8 text-gray-600"></p>
							<dl className="mt-10 max-w-xl space-y-20 text-base leading-7 text-gray-600 lg:max-w-none">
								{features.map((feature) => (
									<div key={feature.name} className="relative pl-9">
										<dt className="inline font-semibold text-gray-900">
											<feature.icon
												className="icons absolute left-1 top-1 h-7 w-7"
												aria-hidden="true"
											/>
											{feature.name}
										</dt>{" "}
										<dd className="inline">{feature.description}</dd>
									</div>
								))}
							</dl>
						</div>
					</div>
					<div className="sm:px-6 lg:px-0">
						<div className="image-border relative isolate overflow-hidde px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pl-16 sm:pr-0 sm:pt-16 lg:mx-0 lg:max-w-none">
							<div
								className="image-border-light absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] opacity-20 ring-1 ring-inset ring-white"
								aria-hidden="true"
							/>
							<div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
								<img
									src= {manWithPhone}
									alt="Product screenshot"
									width={2432}
									height={1442}
									className=" image-man   rounded-tl-xl  ring-1 ring-white/10"
								/>
							</div>
							<div
								className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 sm:rounded-3xl"
								aria-hidden="true"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
