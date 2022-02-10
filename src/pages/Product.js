import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { default as ProductComp } from "../components/Product/Product";
import { CartContext } from "../Contexts/CartContext";
import { getFirestore } from "../services/firebase";
import { Spinner } from "react-bootstrap";
import Swal from "sweetalert2";


const Product = () => {
  const { prodId } = useParams();

  const { addToCart } = useContext(CartContext);

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const successAlert = (product) => { 
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Producto añadido al carrito",
      text: product.name,
      showConfirmButton: false,
      timer: 1500
    });
  };
  const addToCartWithFeedback = (product) => {
    addToCart(product);
    successAlert(product);
  };


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const db = getFirestore();
      try {
        const itemsCollection = db.collection(`products`);
        const itemSnapshot = await itemsCollection.doc(prodId).get();
        if (!itemSnapshot.exists) {
          console.log("No matching documents.");
          return;
        }

        setProduct({ id: itemSnapshot.id, ...itemSnapshot.data() });
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [prodId]);

  return (
    <div>
      {loading ? (
        <Spinner className="loader" animation="border" role="status" width="400">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <>
          <ProductComp
            prodId={prodId}
            product={product}
            addToCart={addToCartWithFeedback}
          />
        </>
      )}
    </div>
  );
};

export default Product;
