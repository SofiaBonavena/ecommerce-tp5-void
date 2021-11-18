import React, { useState, useEffect } from "react";
import { Container } from "./styled";
import { Link } from "react-router-dom";
import { getFirestore } from "../../services/firebase";
import logo from '../../logo.png';

const Navbar = () => {
  const [categories, setCategories] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const db = getFirestore();
      try {
        const itemsCollection = db.collection(`categories`);
        const itemSnapshot = await itemsCollection.get();
        const cats = itemSnapshot.docs.map((doc) => {
          return { catId: doc.id, ...doc.data() };
        });

        setCategories(cats);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      <nav>
        <ul>
          <li>
            <div className="logo">
              <a className="navbar-item" href="#">
                <img
                  alt="logo"
                  src={logo}
                  width="10%"
                  height="10%"
                />
              </a>
            </div>
          </li>
          <li>
            <Link to={`/`}>Home</Link>
          </li>
          <li>
            <Link to={`/shop`}>Shop</Link>
          </li>
          {!loading &&
            categories.map(({ catId, name }) => (
              <li>
                <Link to={`/category/${catId}`}>{name}</Link>
              </li>
            ))}
          <li>
            <Link to={`/checkout`}><img  width="25" src="https://www.pngkey.com/png/full/231-2317482_white-shopping-cart-png-download-buy-icon-white.png"/></Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default Navbar;
