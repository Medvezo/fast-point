import React from "react";
import { CheckIcon } from "@heroicons/react/20/solid";
import './Pricing.scss'

const tiers = [
	{
		name: "Monthly",
		id: "tier-freelancer",
		href: "#",
		priceMonthly: "₼ 45",
		description:
			"Perfect for the adventurous city explorer looking for a flexible and short-term mode of transport.",
		features: [
			"No commitment",
			"Affordable for frequent users",
			"Quick start",
			"Navigates city traffic easily",
		],
		mostPopular: false,
	},
	{
		name: "Seasonal",
		id: "tier-startup",
		href: "#",
		priceMonthly: "₼ 30",
		description:
			"Tailored for the seasonal rider seeking a convenient mode of transport for a few months.",
		features: [
			"Great for seasonal riders",
			"Better value for money.",
			"Extended trial",
			"No monthly renewals",
		],
		mostPopular: true,
	},
	{
		name: "Annual",
		id: "tier-enterprise",
		href: "#",
		priceMonthly: "₼ 24",
		description: "For committed urban commuter looking for a sustainable and economical transportation solution all year round.",
		features: [
			"Maximum savings",
			"Reliable year-round transport",
			"One-time payment.",
			"No renewal hassles.",
		],
		mostPopular: false,
	},
];

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function Example() {
	return (
		<div className="bg-white py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-4xl text-center">
					<h2 className="text-base font-semibold leading-7 text-yellow-600">
						Pricing
					</h2>
					<p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
						Pricing plans for your preferences
					</p>
				</div>

				<div className="main-text isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
					{tiers.map((tier, tierIdx) => (
						<div
							key={tier.id}
							className={classNames(
								tier.mostPopular ? "most-popular lg:z-10 lg:rounded-b-none" : "lg:mt-8",
								tierIdx === 0 ? "lg:rounded-r-none" : "",
								tierIdx === tiers.length - 1 ? "lg:rounded-l-none" : "",
								"flex flex-col justify-between rounded-3xl bg-yellow-100 p-8 ring-1 ring-gray-200 xl:p-10"
							)}>
							<div >
								<div className="flex items-center justify-between gap-x-4">
									<h3
										id={tier.id}
										className={classNames(
											tier.mostPopular ? "seasonal-text" : "text-gray-900",
											"text-lg font-semibold leading-8 "
										)}>
										{tier.name}
									</h3>
									{tier.mostPopular ? (
										<p className="most-popular-text rounded-full px-2.5 py-1 text-xs font-semibold leading-5">
											Most popular
										</p>
									) : null}
								</div>
								<p className="mt-4 text-sm leading-6 text-gray-600">
									{tier.description}
								</p>
								<p className="mt-6 flex items-baseline gap-x-1">
									<span className="text-4xl font-bold tracking-tight text-gray-900">
										{tier.priceMonthly}
									</span>
									<span className="text-sm font-semibold leading-6 text-gray-600">
										/month
									</span>
								</p>
								<ul className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
									{tier.features.map((feature) => (
										<li key={feature} className="flex gap-x-3">
											<CheckIcon
												className="h-6 w-5 flex-none text-indigo-600"
												aria-hidden="true"
											/>
											{feature}
										</li>
									))}
								</ul>
							</div>
							<a
								href={tier.href}
								aria-describedby={tier.id}
								className={classNames(
									tier.mostPopular
										? "bg-blue-800 text-white shadow-sm hover:bg-blue-600"
										: "text-blue-800 ring-1 ring-inset ring-blue-500 hover:ring-blue-800",
									"mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
								)}>
								Buy plan
							</a>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
