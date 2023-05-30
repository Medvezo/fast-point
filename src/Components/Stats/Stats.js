import React from "react";
import './Stats.scss'

const stats = [
	{ id: 1, name: "Number of Active Users", value: "2000+" },
	{ id: 2, name: "Distance Traveled", value: "10000km+" },
	{ id: 4, name: "New users monthly", value: "300+" },
	{ id: 3, name: "CO2 Emissions Saved", value: "1.2 ton+" },

];

export default function Stats() {
	return (
		<div className="bg-white py-24 sm:py-32">
			<h2 className="text-5xl font-bold mb-52" >Statistics Tells the Truth!</h2>
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<dl className="text-container grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
					{stats.map((stat) => (
						<div
							key={stat.id}
							className="mx-auto flex max-w-xs flex-col gap-y-4">
							<dt className="text-name font-semibold text-base leading-10">{stat.name}</dt>
							<dd className="text-value order-first text-3xl font-semibold tracking-tight text-blue-900 sm:text-5xl">
								{stat.value}
							</dd>
						</div>
					))}
				</dl>
			</div>
		</div>
	);
}
