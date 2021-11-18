import React, { useContext } from "react";
import { H1, H2, Link } from "../components/Common/Common";
import { CartContext } from "../Contexts/CartContext";
import { Carousel } from "react-bootstrap";

const Home = () => {
  const { cart, cartTotalItems } = useContext(CartContext);

  console.log("from home", cart);

  return (
    <div>
      {/* <H1>Home {cartTotalItems()}</H1> */}
      {/* <H2>New Arrivals</H2> */}
      {/* <Link url={`https://google.com`} target={false}>
        Click Me Alicia
      </Link> */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src="../../assets/image/hero3.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <p>Best brands and arrivals!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../../assets/image/hero2.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <Link to={`/shop`}>Shop</Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../../assets/image/hero1.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <p>Free shipping</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
