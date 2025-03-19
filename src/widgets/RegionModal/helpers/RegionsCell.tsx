// there are three rows in total
// this component represents one of the three rows

import RegionsLetter from "./RegionsLetter";

export default function RegionsCell({ regionRow }) {
  return (
    <div className="table-cell pl-25">
      {Object.entries(regionRow).map((region, index) => (
        <RegionsLetter key={index} letter={region[0]} regions={region[1]} />
      ))}
    </div>
  );
}
