import Pagination from "../Pagination/Pagination";
import ProductList from "../ProductList/ProductList";

const Products = ({
  handleAddProduct,
  totalPages,
  handleClick,
  page,
  product,
}) => {
  console.log(page);
  console.log(product);

  return (
    <>
      <ProductList
        handleAddProduct={handleAddProduct}
        page={page}
        product={product}
      />
      <Pagination totalPages={totalPages} handleClick={handleClick} />
    </>
  );
};

export default Products;
