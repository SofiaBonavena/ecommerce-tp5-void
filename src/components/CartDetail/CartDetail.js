import React from "react";
import { Container } from "./Styled";


const CartDetail = ({ cart, getCartTotal, resetCart, removeItem }) => {
  return (
    <Container>
      <p class="carttitle"> Cart details</p>
      {cart.map(({ name, price, quantity, id }) => (
        <ul>
            <li><p class="listtext">{name}</p><p class="listtext">{quantity} x {price}</p> 
              <button onClick={()=>removeItem(id)} ><img src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-coloricon-1/21/52-512.png" width="20px"></img></button>
            </li>
        </ul>
      ))}
      <p class="totaltext"> TOTAL ${getCartTotal()}</p>
    </Container>
  );
};

export default CartDetail;