import React from "react";
import { useParams } from "react-router-dom";
import productsData from "../../../products.json";
import UpdateProductForm from "../components/UpdateProductForm"; // Import the update form component

function ItemDetailsPage({ products, updateProduct }) {
  console.log("ItemDetailsPage products:", products);
  const { id } = useParams(); // Extracting 'id' from URL parameters
  console.log("Product ID from URL:", id);

  const product = products.find((product) => String(product.id) === String(id));

  const handleUpdateProduct = (updatedData) => {
    updateProduct(id, updatedData); // Use 'id' here, not 'productId'
  };

  return (
    <div>
      {product ? (
        <div>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Stock: {product.stock}</p>
          <p>Price: ${product.price}</p>
          <p>Discount: {product.discountPercentage}%</p>
          <p>Rating: {product.rating}</p>
          <p>Brand: {product.brand}</p>
          <p>Category: {product.category}</p>
          {product.images && (
            <div>
              <ul>
                {product.images.map((image, index) => (
                  <li key={index}>
                    <img src={image} alt={`Product ${index + 1}`} />
                  </li>
                ))}
              </ul>
            </div>
          )}
          <UpdateProductForm product={product} onUpdate={handleUpdateProduct} />
        </div>
      ) : (
        <p>No product found with ID: {id}</p>
      )}
    </div>
  );
}

export default ItemDetailsPage;
