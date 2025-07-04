import Metrics from "@/components/hero/metrics";
import PictureGrid from "@/components/hero/picture-grid";
import PropertySearch from "@/components/hero/property-search";

export default function Home() {
  return (
    <div className="h-full flex items-center justify-evenly">
      <div className="flex flex-col">
        <div className="w-[30.625em] mb-[3.625rem] flex flex-col gap-y-8">
          <h1 className="text-[54px] font-semibold leading-16 tracking-[0.3px] text-dark-grey">Find your dream rent in the easiest way</h1>
          <h2 className="text-base font-normal leading-[26px] tracking-[0.5px] text-spacial-grey opacity-70">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore eiusmod tempor incididunt ut labore.</h2>
        </div>

        <div className="mb-[12rem] flex items-center">
          <PropertySearch label="Buy" />
          <PropertySearch label="Rent" />
        </div>

        <Metrics />
      </div>

      <PictureGrid />
    </div>
  )
}
