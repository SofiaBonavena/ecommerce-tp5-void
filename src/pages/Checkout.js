import React, { useState, useContext } from "react";
import { Grid, Col } from "../components/Grid";
import { Inner } from "../components/Common/Common";
import CheckoutForm from "../components/CheckoutForm/CheckoutForm";
import { CartContext } from "../Contexts/CartContext";
import CartDetail from "../components/CartDetail/CartDetail";
import { getFirestore, getDate } from "../services/firebase";
import OrderCreated from "../components/OrderCreated/OrderCreated";

const Checkout = () => {
  const { cart, getCartTotal, cartTotalItems, setCart, resetCart, removeItem, addToCart } = useContext(CartContext);
  const [orderCreated, setOrderCreated] = useState(false);


  const placeOrder = async (buyerData) => {

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
    <Inner>
      {orderCreated ? ( 
        <OrderCreated orderCreated={orderCreated}/>
      ) : (
        <Grid>
          <Col desktop={6} tablet={6} mobile={12}>
            <CheckoutForm handleSubmit={placeOrder} cartTotalItems={cartTotalItems} />
          </Col>
          <Col desktop={6} tablet={6} mobile={12}>
            <CartDetail cart={cart} resetCart={resetCart} getCartTotal={getCartTotal} removeItem={removeItem} cartTotalItems={cartTotalItems} editCart={addToCart}/>
          </Col>
        </Grid>
      )}

    </Inner>
  );
};

export default Checkout;
