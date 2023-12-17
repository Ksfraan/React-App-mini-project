import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import ProductsList from "../components/ProductsList";
import ProductForm from "../components/ProductForm";
import productsData from "../../../products.json";

function DashboardPage() {
  const [products, setProducts] = useState(productsData);
  const handleDelete = (productId) => {
    const updatedProducts = products.filter(
      (product) => product.id !== productId
    );
    setProducts(updatedProducts);
  };
  const addProduct = (newProduct) => {
    // Generate a unique ID for the new product using uuid
    const newId = uuidv4();

    const productWithId = { ...newProduct, id: newId };

    // Add the new product with the unique ID to the existing products array
    setProducts([productWithId, ...products]);
  };

  return (
    <div>
      <ProductForm onAdd={addProduct} />
      <ProductsList
        products={products}
        handleDelete={handleDelete}
        setProducts={setProducts}
      />
    </div>
  );
}
export default DashboardPage;
