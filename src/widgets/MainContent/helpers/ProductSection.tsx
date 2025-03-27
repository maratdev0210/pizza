import ProductCard from "../../../features/Product/ProductCard";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

interface IProductSection {
  name: string; // Пиццы | Закуски | Кофе ...
  linkClass: string; // pizzaScroll | snacksScroll   -> used for intersection observer link coloring
  products: any; // list of products to be displayed
  idLink: string;
}

export default function ProductSection({
  name,
  linkClass,
  products,
  idLink,
}: IProductSection) {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      document.querySelector(linkClass)?.classList.replace("off", "on");
    } else {
      document.querySelector(linkClass)?.classList.replace("on", "off");
    }
  }, [inView]);

  return (
    <div id={idLink} ref={ref} className="dodo-padding-left mt-40">
      <h2 className="text-black font-bold text-4xl">{name}</h2>
      <div className="grid grid-cols-4">
        {products.map((product, index) => {
          return (
            <ProductCard
              key={index}
              type={idLink}
              name={product.name}
              image={product.src}
              ingridients={product.ingridients}
              isNew={product.isNew}
              isOutOfStock={product.isOutOfStock}
            />
          );
        })}
      </div>
    </div>
  );
}
