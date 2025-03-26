import { SNACKS } from "../../types/snacks/snacks";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import SnackCard from "./helpers/SnackCard";

export default function Snacks() {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      document.querySelector(".snackScroll")?.classList.replace("off", "on");
    } else {
      document.querySelector(".snackScroll")?.classList.replace("on", "off");
    }
  }, [inView]);

  return (
    <div id="snacks" ref={ref} className="dodo-padding-left mt-40">
      <h2 className="text-black font-bold text-4xl">Закуски</h2>
      <div className="grid grid-cols-4">
        {SNACKS.map((snack, index) => {
          return (
            <SnackCard
              key={index}
              name={snack.name}
              image={snack.src}
              ingridients={snack.ingridients}
              isNew={snack.isNew}
              isOutOfStock={snack.isOutOfStock}
            />
          );
        })}
      </div>
    </div>
  );
}
