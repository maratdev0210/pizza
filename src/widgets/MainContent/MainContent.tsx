import ProductSection from "./helpers/ProductSection";
import { PRODUCTS } from "../../types/mainContent/mainContent";

export default function MainContent() {
  return (
    <>
      {PRODUCTS.map((product, index) => {
        return (
          <ProductSection
            name={product.data.productName}
            linkClass={product.data.classLink}
            idLink={product.data.productId}
            products={product.products}
          />
        );
      })}
    </>
  );
}
