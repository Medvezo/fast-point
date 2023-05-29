import React from "react";
import Scooter from '../../Assets/escooterHome.png'
import ArrowDown from '../../Assets/Down-Arrow-PNG-HD.png'
import './Hero.scss'

export default function Hero() {

	return (
		<div className="bg-white">
			<div className="relative px-6 pt-14 lg:px-8  main-container">
		
				<div className=" max-w-2xl py-32 sm:py-48 lg:py-56 main-text">
					<div className="text-center">
						<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
							First and Only Scooter Subscriptions!
						</h1>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
							lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
							fugiat aliqua.
						</p>
						<div className="mt-10 flex items-center justify-center gap-x-6">
							<a
								href="#"
								className="rounded-md button-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
								Get started
							</a>
							<a
								href="#"
								className="text-sm font-semibold leading-6 text-gray-900">
								Learn more <span aria-hidden="true">→</span>
							</a>
						</div>
					</div>
				</div>
				<img src={Scooter} alt="Scooter" className="scooter-photo" />
				
			</div>
			<img src={ArrowDown} alt="arrow-down" className="arrow-down" />

		</div>
	);
}
