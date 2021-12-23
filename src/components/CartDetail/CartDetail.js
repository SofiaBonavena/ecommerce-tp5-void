import React from "react";
import { Container } from "./Styled";
import { Link } from "react-router-dom";
import { H2 } from '../Common/Common'


const CartDetail = ({ cart, getCartTotal, cartTotalItems, resetCart, removeItem }) => {
  return (
    <Container>
      <H2 class="carttitle"> Carrito</H2>
      {cart.map(({ name, price, quantity, id }) => (
        <ul>
            <li>
              <p class="listtext">{name}</p><p class="listtext">{quantity} x {price}</p> 
              <button class="buttonremove" onClick={()=>removeItem(id)} ><img src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-coloricon-1/21/52-512.png" width="20px"></img></button>
            </li>
        </ul>
      ))}
      { cartTotalItems() > 0 ?
      <>
        <button className="custom-btn btn-15" onClick={()=>resetCart()}> Vaciar carrito </button>
          <p class="totaltext"> TOTAL ${getCartTotal()}</p>
      </>
      :
      <>
        <p class="totaltext"> No hay productos</p>
        <Link to="/shop">
        <button className="custom-btn btn-16">
            Seguir comprando
          </button>
        </Link>
      </>
      }
      
    </Container>
  );
};

export default CartDetail;