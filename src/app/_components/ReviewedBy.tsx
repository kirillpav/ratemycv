import Image from "next/image";

const companies = [
	{ name: "Google", logo: "/logos/google.svg" },
	{ name: "Meta", logo: "/logos/meta.svg" },
	{ name: "Amazon", logo: "/logos/amazon.svg" },
	{ name: "Microsoft", logo: "/logos/microsoft.svg" },
	{ name: "Apple", logo: "/logos/apple.svg" },
];

export default function ReviewedBy() {
	return (
		<section className="py-16 text-center bg-blue-primary rounded-4xl m-5">
			<h2 className="text-3xl font-semibold text-gray-800 mb-12">
				Reviewed By Professionals From
			</h2>
			<div className="flex justify-center items-center gap-16 px-8">
				{companies.map((company) => (
					<div
						key={company.name}
						className="animate-float opacity-60 hover:opacity-100 transition-opacity duration-300"
					>
						<Image
							src={company.logo}
							alt={`${company.name} logo`}
							width={120}
							height={40}
							className="grayscale hover:grayscale-0 transition-all duration-300"
						/>
					</div>
				))}
			</div>
		</section>
	);
}
