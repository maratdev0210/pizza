import { X } from "lucide-react";

interface StoryImage {
  showStory: boolean;
  setShowStory: React.Dispatch<React.SetStateAction<boolean>>;
  image: string;
}

const storiesToShow: number[] = [1, 2, 3]; // number of stories one card contains

export default function StoryModal({
  showStory,
  setShowStory,
  image,
}: StoryImage) {
  return (
    <div className={`${showStory ? "fixed inset-0 z-50" : "hidden"}`}>
      <div className="fixed inset-0 w-full h-[100vh] flex justify-center items-center bg-black/80 backdrop-blur-2xl ">
        <div className="relative">
          <div className="flex justify-center items-center gap-1 relative top-3">
            {storiesToShow.map((story, index) => {
              return (
                <div className="flex flex-col w-21">
                  <span className="h-1 rounded-lg bg-gray-100/40 inline-block"></span>
                  <span
                    style={{ animationDelay: String(index + 4 * index) + "s" }}
                    className="animate-story w-0 h-1 rounded-lg bg-white block"
                  ></span>
                </div>
              );
            })}
          </div>
          <img className="h-[50vh] w-70 rounded-xl" src={image} />
          <span
            onClick={() => setShowStory(false)}
            className="absolute cursor-pointer bg-gray-100 rounded-full text-gray-300/90 px-0.5 py-0.5 top-14 right-2 -translate-y-full "
          >
            <X size={24} />
          </span>
        </div>
      </div>
    </div>
  );
}
