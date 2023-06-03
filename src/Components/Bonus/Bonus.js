import React from "react";

import {
	CheckCircleIcon,
	ClockIcon,
	CurrencyDollarIcon,
} from "@heroicons/react/24/outline";

const features = [
	{
		name: "Just Ride!",
		description:
			"Enjoy your ride with out Subscriptions and gain bonuses. Simple as that!",
		href: "#",
		icon: ClockIcon,
	},
	{
		name: "Bonuses",
		description:
			"For each Pricing there are different bonuses,check it out on pricing section!",
		href: "#",
		icon: CurrencyDollarIcon,
	},
	{
		name: "Use",
		description:
			"As bonus are in your account use it as you want and mainly, Whenever you want! ",
		href: "#",
		icon: CheckCircleIcon,
	},
];

export default function Bonus() {
	return (
		<div className="bg-white py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto  lg:mx-0">
					<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
						Ride and Gain Bonuses!
					</h2>
					<p className="mt-6 text-lg leading-8 text-gray-600">
						For every 100km ride, gain Bonuses to your account
					</p>
				</div>
				<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
					<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
						{features.map((feature) => (
							<div key={feature.name} className="flex flex-col">
								<dt className="text-base font-semibold leading-7 text-gray-900">
									<div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-600">
										<feature.icon
											className="h-6 w-6 text-white"
											aria-hidden="true"
										/>
									</div>
									{feature.name}
								</dt>
								<dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
									<p className="flex-auto">{feature.description}</p>
									<p className="mt-6">
										<a
											href={feature.href}
											className="text-sm font-semibold leading-6 text-yellow-600">
											Learn more <span aria-hidden="true">→</span>
										</a>
									</p>
								</dd>
							</div>
						))}
					</dl>
				</div>
			</div>
		</div>
	);
}
