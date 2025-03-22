import { STORIES } from "../../types/widgets/stories/stories";
import Story from "./helpers/Story";
import { useRef, useEffect, useState } from "react";
import { LeftControl, RightConrol } from "./helpers/Controls";

export default function Stories() {
  const storiesRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScrollWidth, setMaxScrollWidth] = useState(99999);

  const handleScroll = () => {
    if (storiesRef.current) {
      setMaxScrollWidth(
        storiesRef.current.scrollWidth - storiesRef.current.clientWidth
      );
      setScrollPosition(storiesRef.current.scrollLeft);
    }
  };

  return (
    <div className="dodo-padding-left mt-4">
      <div className="mt-8 relative">
        <div
          onScroll={handleScroll}
          ref={storiesRef}
          className="w-full flex gap-2 overflow-x-auto hide-scrollbar"
        >
          {STORIES.map((story, index) => {
            return <Story key={index} image={story} />;
          })}
        </div>
        <div
          onClick={() => (storiesRef.current.scrollLeft = 0)}
          className={`${scrollPosition == 0 ? "hidden" : "cursor-pointer absolute top-1/2 left-0 -translate-y-1/2 -translate-x-full pr-4"}`}
        >
          <LeftControl />
        </div>
        <div
          onClick={() => (storiesRef.current.scrollLeft = maxScrollWidth)}
          className={`${scrollPosition >= maxScrollWidth ? "hidden" : "cursor-pointer absolute translate-x-full -translate-y-1/2 top-1/2 pl-4 right-0"}`}
        >
          <RightConrol />
        </div>
      </div>
    </div>
  );
}
