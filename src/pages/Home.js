import React, { useContext } from "react";
import { Link } from "../components/Common/Common";
import { CartContext } from "../Contexts/CartContext";
import { Carousel } from "react-bootstrap";
import Novedades from "../components/Novedades/Novedades";
import Newsletter from "../components/Newsletter/Newsletter";
import Payments from "../components/Payments/Payments";

const Home = () => {
  const { cart, cartTotalItems } = useContext(CartContext);

  console.log("from home", cart);

  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src="../../assets/image/hero3.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../../assets/image/hero2.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../../assets/image/hero1.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Novedades/>
      <Newsletter/>
      <Payments/>
    </div>
  );
};

export default Home;
