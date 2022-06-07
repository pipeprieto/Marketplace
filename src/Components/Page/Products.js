import Pagination from "../Pagination/Pagination";
import ProductList from "../ProductList/ProductList";

export default function Products({
  handleAddProduct,
  totalPages,
  handleClick,
  product,
}) {
  return (
    <>
      <ProductList handleAddProduct={handleAddProduct} product={product} />
      <Pagination totalPages={totalPages} handleClick={handleClick} />
    </>
  );
}
