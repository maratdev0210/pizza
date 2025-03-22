// Story card
interface StoryImage {
  image: string;
}

import StoryModal from "./StoryModal";
import { useState } from "react";

export default function Story({ image }: StoryImage) {
  const [showStory, setShowStory] = useState(false);
  return (
    <>
      <img
        className="w-48 h-64 rounded-2xl border-none cursor-pointer"
        src={image}
        onClick={() => setShowStory(true)}
      />
      <StoryModal
        showStory={showStory}
        setShowStory={setShowStory}
        image={image}
      />
    </>
  );
}
