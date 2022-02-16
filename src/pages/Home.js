import React, { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";
import { Carousel } from "react-bootstrap";
import Novedades from "../components/Novedades/Novedades";
import Newsletter from "../components/Newsletter/Newsletter";
import Payments from "../components/Payments/Payments";
import { Link } from "react-router-dom";

const Home = () => {
  const { cart } = useContext(CartContext);
  console.log("from home", cart);

  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <div className="carouselcaption">
            <Carousel.Caption>
              <div className="textbuttoncar">
                <h3 className='carouseltext'> LAS MEJORES <br></br>MARCAS</h3>
                <h3 className='carouseltext2'> LAS MEJORES MARCAS</h3>
                <div className='calltoaction'><Link to='/shop'><button className="custom-btn btn-16"> IR A LA TIENDA</button></Link></div>
              </div>
            </Carousel.Caption>
          </div>
          <img
            className="imgdesktop w-100 h-100"
            src="../../assets/image/hero1.jpg"
            alt="First slide"
          />
          <img
            className="imgmobile w-100 h-100"
            src="../../assets/image/heromobile.png"
            alt="First slide"
          />

        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption>
          <div className="textbuttoncar">
              <h3 className='carouseltext'>LOS MEJORES <br></br>PRECIOS</h3>
              <h3 className='carouseltext2'> LOS MEJORES PRECIOS</h3>
              <div className='calltoaction'><Link to='/shop'><button className="custom-btn btn-16"> IR A LA TIENDA</button></Link></div>
            </div>
          </Carousel.Caption>
          <img
            className="imgdesktop w-100"
            src="../../assets/image/hero2.jpg"
            alt="Second slide"
          />
          <img
            className="imgmobile w-100 h-100"
            src="../../assets/image/heromobile.png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption>
          <div className="textbuttoncar">
              <h3 className='carouseltext'>LA MAYOR <br></br>DURABILIDAD</h3>
              <h3 className='carouseltext2'> LA MAYOR DURABILIDAD</h3>
              <div className='calltoaction'><Link to='/shop'><button className="custom-btn btn-16"> IR A LA TIENDA</button></Link></div>
            </div>
          </Carousel.Caption>
          <img
            className="imgdesktop w-100"
            src="../../assets/image/hero3.jpg"
            alt="Third slide"
          />
          <img
            className="imgmobile w-100 h-100"
            src="../../assets/image/heromobile.png"
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel>
      <Novedades />
      <Newsletter />
      <Payments />
    </div>
  );
};

export default Home;
