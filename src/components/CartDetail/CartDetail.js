import React from "react";
import { Container } from "./Styled";
import { Link } from "react-router-dom";
import { H2 } from '../Common/Common'


const CartDetail = ({ cart, getCartTotal, cartTotalItems, resetCart, removeItem, editCart }) => {
  return (
    <Container>
      <H2 className="carttitle"> Carrito</H2>
      <ul>
        {cart.map(( product ) => (
              <li key={product.id}>
                <p className="listtext">{product.name}</p>
                <p className="listtext">{product.price}</p>
                <p><button className="editquantity" disabled={ product.quantity === 1 } onClick={() => editCart({ ...product, quantity: -1 })} > - </button></p>
                <p className="listtext">{product.quantity}</p>
                <p><button className="editquantity" onClick={() => editCart({ ...product, quantity: 1 })} > + </button></p>
                <p><button className="buttonremove" onClick={()=>removeItem(product.id)} ><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAilBMVEX/AAD/////oKD/MzP/CQn//Pz/6en/wMD/urr/tbX/BAT/RUX/rKz/YWH/QUH/ior/8fH/pqb/qqr/9fX/3d3/1dX/eHj/Z2f/cXH/Gxv/8/P/sbH/zMz/FRX/gYH/mpr/lZX/KCj/UlL/yMj/Ojr/TU3/JCT/a2v/RET/hob/XFz/4eH/WFj/Ly/KNXz8AAAEx0lEQVR4nO3d21riMBQF4BRoFTkVSpGTgFLFEXn/1xsOMwgNO0mbNklxres9mfxaW5qEbzOvkPhxu1ZsBvOomKmxAsaIHjusjLzXwgJmV4Bw+VGK75iFvlFbGJfoO2RmW7gs17fPxrcqHJUOZKyrR9QTmgDuifaENSNAxp5tCWNDQMYGloSJMSHTeGhoCGfmgGxsRfhkUKjxS8wvXJsEspUF4diosG5B+GpUyIbGhUOzQPZoXDg3LOwZF7YNC3M/Lyoj3Ny9sAMhhBBmFja6rSz5nFRM2BtOfc/PkiioCT8luSUc5VxZ6VdF2Mw7puijoEvCdt4hPRHRIaHG6/g+gwoINdfhu84L9X6F9OqPO8KHvAP+S+i8MMg74HlGrgvzjnfO590LiVsNhGQgJANh7kCYNRCSgTB3IMwaCMncv7BZlrB1e9zcJ06IGT0u6qwhDiGU/Ct5iHElAz9Nxu3bxzVvCvtGDyEUlz9TNWFIXCcVyMdcRRjYnqZW+M1wThjKNhAcTywVbmxPUTOv6R2FtNDcabyy0pcIn21PUD9ioW97egVkLhSaPaxWTvpCoem96zIiFor2KKuS3y6k3hiqFLHQ9InDMtIWCr0X2/PTTyAWrmzPTzvvnlhIbVBWJ+kXKO6TN3lUoCLhdtn590Mz32UqK/zXwG6845s9hF9sEv401q11mupeqKMbmpsrUWGvii/6jc32FoZYTfTjWe9fFLBvo97iS2kWh8qO0jP3WEkuLf7k/zT7c+KoknwFty77P5anR2zYls68d5pE1JdWrk5jTpvSSun8tYXJz0cIX/x7rF9UipcSdsqVBoStq4Vm0ZPm+j4uqkyuxlzYFb6kLn7q3B3jTvTRlY3UB8t3q8L011fppbp0Jf0WU1OuNCHkqqkdgQn3KKb+aBtc5bdFIf+EpRZ61Cv5bTTha3nJQv7AM3WZptdp6YuPH3NrUcgfJqX2dfjT7dS8+b0V4SKuw8KA2KSEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEUElItKu6HyHVo8QtId9bhWqZvOQqqX4t6VZBnje3KPziqldEJd8fZ0lUprtsel7NopBN09WvVCXX9y2hKgPlMU0IF6liuut1uh0S3eJIvdKEMNXXlLo/HrK+rhSMeX3/CsTt80oXsviiNCSvvHRlJBz18scWUl3AjAnZ7FwpvOexy9Zrc0nbyJ97dCxrgGhAyJJZGHl++CBsj3bMrnmsXL9JK5PBqbIjrTQhPEy9Jbw+y6w0JLQYCCH8FcKdbYM4BQjlt3arKUDodq/1SQFC6i3HjfBvZdmFdANcF8K/WWcXRkqNwm1lWIDQ6T/EhGsenEfo8mXKLxTlEYp7KlvNJJLPXkUoboxtM3x35HxCr2dbQqSlMnklIdlP3HK49bv8wtDJj9+xfOLKQieJakBVoRe5dqG+bBVnriqUrK0bz1j+qM8s9IKxbdY534pXaEah521XXdu2fXaLDL6Mwn2m60HNZvoPgfL1ecpfsDef7iumWj0AAAAASUVORK5CYII=" width="22px" alt="trashbin"></img></button></p>
              </li>
        ))}
      </ul>
      { cartTotalItems() > 0 ?
      <>
        <button className="custom-btn btn-15" onClick={()=>resetCart()}> VACIAR CARRITO </button>
          <p className="totaltext"> TOTAL ${getCartTotal()}</p>
      </>
      :
      <>
        <p className="totaltext"> No hay productos</p>
        <Link to="/shop">
        <button className="custom-btn btn-16">
            VOLVER A LA TIENDA
          </button>
        </Link>
      </>
      }
      
    </Container>
  );
};

export default CartDetail;