// represents the Regions By letter:
/*
    А: Абакан, Астана, ...
    Б: Балашиха, Благовещенск, ..
*/

function adjustLetters(letter: string): string {
  const mediumGaps = ["А", "И", "М", "О", "С"];
  const largeGaps = ["Д", "Ф", "Ш", "Ю"];

  if (letter === "Ж" || letter == "Щ") {
    return "gap-2.5";
  } else if (largeGaps.includes(letter)) {
    return "gap-3";
  } else if (mediumGaps.includes(letter)) {
    return "gap-3.5";
  }
  return "gap-4";
}

export default function RegionsLetter({ letter, regions }) {
  return (
    <div className={`flex relative pt-1 ${adjustLetters(letter)}`}>
      <span className="text-orange-500 block">{letter}</span>
      <div>
        {regions.map((region) => {
          return <span className="block font-semibold text-sm">{region}</span>;
        })}
      </div>
    </div>
  );
}
