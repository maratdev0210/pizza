// is opened on initial page load
// offers the user to choose the city to which he
// wants a delivery

import { REGIONS } from "../../types/widgets/regions/regions";
import RegionsCell from "./helpers/RegionsCell";
import SearchCity from "./helpers/SearchCity";
import { restructureRegions } from "./helpers/restructureRegions";
import { AlphabeticalRegion } from "../../types/widgets/regions/regions";
import logo from "../../../public/logo.svg";
import { useState, useEffect } from "react";
import { FileChartColumnIncreasingIcon } from "lucide-react";

export default function RegionModal() {
  const [regions, setRegions] = useState(REGIONS);
  const [searchedCity, setSearchedCity] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const newRegions: AlphabeticalRegion[] = REGIONS.map((regionCell) => {
      const filteredCell = {};
      for (const [letter, cities] of Object.entries(regionCell)) {
        const filteredCities = cities.filter((city) =>
          city.toLocaleLowerCase().includes(searchedCity)
        );
        if (filteredCities.length > 0) {
          filteredCell[letter] = filteredCities;
        }
      }
      return Object.keys(filteredCell).length ? filteredCell : null;
    }).filter(Boolean);

    setRegions(restructureRegions(newRegions));
  }, [searchedCity]);

  return (
    <>
      {showModal && (
        <div
          onClick={() => setShowModal(false)}
          className="fixed inset-0 flex justify-center items-center bg-black/60"
        >
          <div className="absolute shadow-2xl pt-8  bg-white z-200  lg:w-7/10 rounded-2xl pb-10 border-none">
            <div className="pl-25">
              <img src={logo} className="size-12" />
            </div>
            <div className="pl-20">
              <SearchCity setSearchedCity={setSearchedCity} />
            </div>
            <div className="pl-25 flex gap-5">
              <span className="font-semibold text-xl dodo-hover">Москва</span>
              <span className="font-semibold text-xl dodo-hover">
                Санкт-Петербург
              </span>
            </div>
            <div className="w-full h-80 mt-8 overflow-auto">
              <div className="table">
                {regions.map((region, index) => (
                  <RegionsCell key={index} regionRow={region} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// TO-DO: Use reducers to store the chosen city, once the city has been chosen, close the modal window
