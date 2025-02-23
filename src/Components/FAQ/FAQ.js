import React from "react";
import './FAQ.scss';

const faqs = [
	{
		question: "1. What is scooter subscription sharing?",
		answer:
			"It is a service offering scooter usage for a fixed period for a recurring fee, including maintenance and insurance.",
	},
	{
		question: "2. What are the benefits of scooter subscription sharing?",
		answer:
			"It offers cost savings, no maintenance responsibility, and flexibility, making it a more sustainable transportation option.",
	},{
		question: "3. Where can I use the scooter?",
		answer:
			"It be used anywhere within the service area, also outside of the service area but with an additional fee.",
	},];

export default function FAQ() {
	return (
		<div className="bg-white">
			<h2 className="text-5xl font-semibold">¿ FAQ ?</h2>
			<div className="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40">
				<div className="main-text lg:grid lg:grid-cols-12 lg:gap-8">
					<div className="lg:col-span-5">
						<h2 className="left-main text-2xl font-bold leading-10 tracking-tight text-gray-900">
							Frequently asked questions
						</h2>
						<p className="mt-4 text-base leading-7 text-gray-600">
							Can't find the answer you're looking for? Reach out to our{" "}
							<a
								href="#support"
								className="customer-support font-semibold text-indigo-600 hover:text-indigo-500">
								customer support
							</a>{" "}
							team.
						</p>
					</div>
					<div className="mt-10 lg:col-span-7 lg:mt-0">
						<dl className="space-y-12">
							{faqs.map((faq) => (
								<div key={faq.question}>
									<dt className="faq-question text-base font-semibold leading-10">
										{faq.question}
									</dt>
									<dd className="mt-2 text-base leading-7 text-gray-600">
										{faq.answer}
									</dd>
								</div>
							))}
						</dl>
					</div>
				</div>
			</div>
		</div>
	);
}
