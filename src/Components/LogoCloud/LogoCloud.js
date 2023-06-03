import React from "react";
import shopStore from "../../Assets/shopStore-noBG.png"
export default function LogoCloud() {
	return (
		<div className="bg-gray-900 py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<h2 className="text-center text-lg font-semibold leading-8 text-white">
					Main Partnership With:
				</h2>
				<div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
					
					
					<img
						className="max-h-20 w-full object-contain sm:col-start-3 lg:col-span-5"
						src={shopStore}
						alt="SavvyCal"
						width={200}
						height={200}
					/>
					
				</div>
					<p className="font-semibold text-yellow-600 mx-auto pt-5 text-2xl">ShopStore.az</p>
			</div>
		</div>
	);
}
