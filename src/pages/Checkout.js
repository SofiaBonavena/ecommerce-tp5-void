import React, { useState, useContext } from "react";
import { Grid, Col } from "../components/Grid";
import { Inner } from "../components/Common/Common";
import CheckoutForm from "../components/CheckoutForm/CheckoutForm";
import { CartContext } from "../Contexts/CartContext";
import CartDetail from "../components/CartDetail/CartDetail";
import { getFirestore, getDate } from "../services/firebase";
import OrderCreated from "../components/OrderCreated/OrderCreated";

const Checkout = () => {
  const { cart, getCartTotal, cartTotalItems, setCart, resetCart, removeItem } = useContext(CartContext);
  const [orderCreated, setOrderCreated] = useState(false);

  console.log(cart);

  const placeOrder = async (buyerData) => {
    //Vamos a preparar el pedido
    //1-tenemos los datos del usuario (values)

    //2-tenemos el estado del carrito

    //3-Escribimos la orden en fireba

    try {
      const db = getFirestore();
      console.log(`order N ${buyerData.name}`);

      const cartItems = cart.map(({ id, name, price, quantity }) => {
        return { id, name, price, quantity };
      });

      console.log(cartItems)

      const order = {
        buyer: buyerData,
        items: cartItems,
        date: getDate(),
        total: getCartTotal(),
      };

      const res = await db.collection("orders").add(order);
      setCart([]);
      setOrderCreated(res.id);
    } catch (error) {
      console.log(error);
    }
  };
  return ( 
    /* Cuando mandas submit en el formulario se setea a verdadero. 
    Cuando es verdadero aparece el H2 y cuando no es verdadero 
    renderiza el formulario y el cartdetail  */
    <Inner>
      {orderCreated ? ( 
        <OrderCreated orderCreated={orderCreated}/>
      ) : (
        <Grid>
          <Col desktop={6} tablet={6} mobile={12}>
            <CheckoutForm handleSubmit={placeOrder} />
          </Col>
          <Col desktop={6} tablet={6} mobile={12}>
            <CartDetail cart={cart} resetCart={resetCart} getCartTotal={getCartTotal} removeItem={removeItem} cartTotalItems={cartTotalItems} />
          </Col>
        </Grid>
      )}

    </Inner>
  );
};

export default Checkout;
