import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";
import "./Products.css";

function Products() {
  const [products, setProducts] = useState([]);
  const [editId, setEditId] = useState(null);

  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [search, setSearch] = useState("");

  const fetchProducts = async () => {
    try {
      const res = await API.get("/products");
      setProducts(res.data);
    } catch (error) {
      console.log(error);
      alert("Error fetching products");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const resetForm = () => {
    setProductName("");
    setCategory("");
    setPrice("");
    setStock("");
    setEditId(null);
  };

  const addProduct = async (e) => {
    e.preventDefault();

    try {
      await API.post("/products", {
        productName,
        category,
        price,
        stock,
      });

      alert("Product Added");
      resetForm();
      fetchProducts();
    } catch (error) {
      console.log(error);
      alert("Error adding product");
    }
  };

  const deleteProduct = async (id) => {
    if (!window.confirm("Are you sure?")) return;

    try {
      await API.delete(`/products/${id}`);
      alert("Product Deleted");
      fetchProducts();
    } catch (error) {
      console.log(error);
      alert("Error deleting product");
    }
  };

  const startEdit = (p) => {
    setEditId(p._id);
    setProductName(p.productName);
    setCategory(p.category);
    setPrice(p.price);
    setStock(p.stock);
  };

  const updateProduct = async (e) => {
    e.preventDefault();

    try {
      await API.put(`/products/${editId}`, {
        productName,
        category,
        price,
        stock,
      });

      alert("Product Updated");
      resetForm();
      fetchProducts();
    } catch (error) {
      console.log(error);
      alert("Error updating product");
    }
  };

  const filteredProducts = products.filter((p) =>
    p.productName?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <div className="products-container">
        <div className="products-header">
          <h1>Products Management</h1>

          <input
            type="text"
            placeholder="Search Product..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <form
          className="product-form"
          onSubmit={editId ? updateProduct : addProduct}
        >
          <input
            type="text"
            placeholder="Product Name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />

          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <input
            type="number"
            placeholder="Stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />

          <button type="submit">
            {editId ? "Update Product" : "Add Product"}
          </button>

          {editId && (
            <button
              type="button"
              className="cancel-btn"
              onClick={resetForm}
            >
              Cancel
            </button>
          )}
        </form>

        <div className="products-table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredProducts.length === 0 ? (
                <tr>
                  <td colSpan="5">No Products Found</td>
                </tr>
              ) : (
                filteredProducts.map((p) => (
                  <tr key={p._id}>
                    <td>{p.productName}</td>
                    <td>{p.category}</td>
                    <td>₹{p.price}</td>
                    <td>{p.stock}</td>

                    <td>
                      <button
                        className="edit-btn"
                        onClick={() => startEdit(p)}
                      >
                        Edit
                      </button>

                      <button
                        className="delete-btn"
                        onClick={() => deleteProduct(p._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Products;