// is opened on initial page load
// offers the user to choose the city to which he
// wants a delivery

import { REGIONS } from "../../types/widgets/regions";
import RegionsCell from "./helpers/RegionsCell";
import SearchCity from "./helpers/SearchCity";
import logo from "../../../public/logo.svg";
import { useState, useEffect } from "react";

export default function RegionModal() {
  const [regions, setRegions] = useState(REGIONS);
  const [searchedCity, setSearchedCity] = useState("");

  return (
    <>
      <div className="fixed inset-0 flex justify-center items-center bg-black/60">
        <div className="absolute shadow-2xl pt-8  bg-white z-200  lg:w-7/10 rounded-2xl pb-10 border-none">
          <div className="pl-25">
            <img src={logo} className="size-12" />
          </div>
          <div className="pl-20">
            <SearchCity setSearchedCity={setSearchedCity} />
          </div>
          <div className="pl-25 flex gap-5">
            <span className="font-semibold text-xl">Москва</span>
            <span className="font-semibold text-xl">Санкт-Петербург</span>
          </div>
          <div className="w-full h-60 mt-8 overflow-auto">
            <div className="table">
              {REGIONS.map((region, index) => (
                <RegionsCell key={index} regionRow={region} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
