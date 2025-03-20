// makes the table cells as equal as possible along the 3 columns
import { AlphabeticalRegion } from "../../../types/widgets/regions/regions";

function restructureRegions(
  regions: AlphabeticalRegion[]
): AlphabeticalRegion[] {
  const newRegions: AlphabeticalRegion[] = [{}, {}, {}];

  let index = 0; // Tracks which column to add to

  regions.forEach((regionCell) => {
    Object.entries(regionCell).forEach(([letter, cities]) => {
      newRegions[index][letter] = cities; // Assign region to current column
      index = (index + 1) % 3; // Move the next region in sequence
    });
  });

  return newRegions;
}

export { restructureRegions };
