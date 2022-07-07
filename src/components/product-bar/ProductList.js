import "./css/Productlist.css";
import { ReactComponent as Heart } from "../../assets/Icons/heart.svg";
import { ReactComponent as HeartBlack } from "../../assets/Icons/heart-black.svg";
import { ReactComponent as Sliders } from "../../assets/Icons/sliders.svg";
import { ReactComponent as ArrowUp } from "../../assets/Icons/arrow-up.svg";
import { ReactComponent as ArrowDown } from "../../assets/Icons/arrow-down.svg";
import timesIcon from "../../assets/Icons/x.svg";
import React, { useEffect, useState,  } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { Link } from "react-router-dom";
import { setAllitem, setLoading } from "../../redux/actions";
import { filterCategory } from "../../redux/actions";

const ProductList = () => {

  const [addToWishlist, setAddToWishlist] = useState(false);
  const { loading, allProduct } = useSelector((state) => state.cart_reducer);
  const [showFilter, setShowFilter] = useState(false);  
  const dispatch = useDispatch();
  // const data = useSelector((state) => state.cart_reducer);
  // console.log(data);
  const getProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products/");
    const data = await response.json();
    dispatch(setAllitem(data));
    dispatch(setLoading(false));
  };
  useEffect(() => {
    getProducts();
  }, []);

  const handleClick = () => {
    showFilter === true ? setShowFilter(false) : setShowFilter(true);
  };
  const AddToWishlist = () => {
    addToWishlist === true ? setAddToWishlist(false) : setAddToWishlist(true);
  }

  const Loading = () => {
    return <>Loading.....</>;
  };

  const ShowProducts = (e) => {
    return (
      <>
        {allProduct.map((product) => {
          return (
            <article className="card" key={product.id}>
              <Link to={`/${product.id}`}>
                <img
                  className="cart-img"
                  src={product.image}
                  alt={product.title}
                />
              </Link>
              <h5>{product.title.substring(0, 15)}</h5>
              <p className="price">${product.price}</p>
              <div onClick={AddToWishlist} className="heart-img">{addToWishlist ? <HeartBlack /> : <Heart />}
              </div>
            </article>
          );
        })}
      </>
    );
  };

  return (
    <>
      <section className="product-container aem-Grid aem-Grid--default--12 aem-Grid--phone--1">
        <aside className="product__filter aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--12 aem-GridColumn--phone--1">
          <div className="category">
            <ul>
              <li><a href="/">Clothing</a></li>
              <li> <a href="/"> / </a></li>
              <li><a href="/">Women's</a></li>
              <li><a href="/"> / </a></li>
              <li><a href="/" className="product__filter-outwear">Outerwear</a></li>
            </ul>
          </div>

          <div className="product__filter_btn">
            <h2 onClick={handleClick} className="filter_mob"><Sliders style={{ width: '15px', height: '15px' }} /><span> Filter Results</span></h2>
            <h2 className="filter_mob"><ArrowUp style={{ width: '12px', height: '12px' }} /><ArrowDown style={{ width: '12px', height: '12px' }} /><span> Sort Products</span></h2>
          </div>

          <h3 className="filter_desktop"> Filters </h3>

          <div className={showFilter ? "product__filter_list active" : "product__filter_list"}>
            <div className="filter__button_mob">
              <h2>Filters</h2>
              <img onClick={handleClick} src={timesIcon} alt="Button to close fliter bar"/>
            </div>
            <hr />
            <div className="filter__item">
              <h3>Categories</h3>
              <ul >
                <li onClick={() => dispatch(filterCategory("jewelery"))}>
                  <input value="jewelery" type="radio" />
                  <span>Jewellery</span>
                </li>
                <li onClick={() => dispatch(filterCategory("electronics"))} >
                  <input value="electronics" type="radio" />
                  <span>Electronics</span>
                </li>
                <li  onClick={() => dispatch(filterCategory("men's clothing"))}>
                  <input type="radio" />
                  <span>Men's Clothing</span>
                </li>
                <li onClick={() => dispatch(filterCategory("women's clothing"))}>
                  <input type="radio" />
                  <span>Women's Clothing</span>
                </li>
              </ul>
            </div>
            <hr />
          </div>
        </aside>
        <aside className="product-card-wrapper aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--tablet--12 aem-GridColumn--phone--1">
          <div className="product-grid">
            <div className="top-filter">
              <div>38 Results</div>
              <select>
                <option>Sort By Latest</option>
              </select>
            </div>
            <div className="cards">
              {loading ? <Loading /> : <ShowProducts />}
            </div>
          </div>
        </aside>
      </section>
    </>
  );
};

export default ProductList;
