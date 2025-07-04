import Metrics from "@/components/hero/metrics";
import PictureGrid from "@/components/hero/picture-grid";
import PropertySearch from "@/components/hero/property-search";

export default function Home() {
	return (
		<div className="p-4 h-full flex flex-col items-center justify-evenly gap-12 lg:p-0 lg:mt-12 lg:flex-row lg:items-start lg:gap-0">
			<div className="flex flex-col">
				<div className="max-w-[24ch] mb-8 flex flex-col gap-y-8 md:max-w-[72ch] lg:w-[30.625em] lg:mb-[3.625rem] ">
					<h1 className="text-3xl font-semibold text-dark-grey md:text-4xl lg:text-[54px] lg:leading-16 lg:tracking-[0.3px]">
						Find your dream rent in the easiest way
					</h1>
					<h2 className="text-base font-normal leading-[26px] tracking-[0.5px] text-spacial-grey opacity-70">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore eiusmod tempor incididunt ut
						labore.
					</h2>
				</div>

				<div className="mb-12 flex items-center lg:mb-[12rem]">
					<PropertySearch label="Buy" />
					<PropertySearch label="Rent" />
				</div>

				<Metrics />
			</div>

			<PictureGrid />
		</div>
	);
}
