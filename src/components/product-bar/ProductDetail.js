import "./css/ProductDetail.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import star from "../../assets/Icons/star.svg";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/actions/index";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(0);
  //store useDispatch
  const dispatch = useDispatch();
  const handleCart = (product) => {
    // console.log(product.id);
    dispatch(addItem({ id, quantity }));
  };
  const getProduct = async () => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    setProduct(await response.json());
  };
  useEffect(() => {
    getProduct();
  });

  return (
    <>
      <div className="main_wrapper ">
        <div className="container aem-Grid aem-Grid--default--12 aem-Grid--phone--1">
          <div className="product_div">
            <div className="product_div_left ">
              <div className="img_container">
                <img src={product.image} alt="{product.title}" />
              </div>
              <div className="hover_container">
                <div><img src={product.image} alt="swatch01" /></div>
                <div><img src={product.image} alt="swatch01" /></div>
                <div><img src={product.image} alt="swatch01" /></div>
                <div><img src={product.image} alt="swatch01" /> </div>
                <div><img src={product.image} alt="swatch01" /></div>
              </div>
            </div>
            <div className="product_div_right ">
              <h2 className="product_name">{product.title}</h2>
              <p className="product_price"> ${product.price}</p>
              <div className="product_rating">
                <span>
                  <img src={star} alt="rating icon 1" />
                  <img src={star} alt="rating icon 1" />
                </span>
                <span>
                  <img src={star} alt="rating icon 2" />
                </span>
                <span>
                  <img src={star} alt="rating icon 3" />
                </span>
                <span>
                  <img src={star} alt="rating icon 4" />
                </span>
                <span>
                  <img src={star} alt="rating icon 5" />
                </span>
                <span> {product.rating && product.rating.rate}</span>
              </div>
              <p className="product_description">{product.description}</p>
              <hr />
              {/* <div className="color_btn">
                <label>Color</label>
                <div className="color_img">
                  <img
                    src={require("../../assets/images/Swatch01.png")}
                    alt="blue color button"
                    className="swatch-01"
                  />
                  <img
                    src={require("../../assets/images/Swatch02.png")}
                    alt="pink color button"
                    className="swatch-02"
                  />
                  <img
                    src={require("../../assets/images/Swatch03.png")}
                    alt="drak gray color button"
                    className="swatch-03"
                  />
                  <img
                    src={require("../../assets/images/Swatch04.png")}
                    alt="light gray color button"
                    className="swatch-04"
                  />
                </div>
              </div> */}
              {/* <div className="size_btn">
                <label>Size</label>
                <div className="size">
                  <p>XS</p>
                  <p>S</p>
                  <p>M</p>
                  <p>L</p>
                  <p>XL</p>
                </div>
              </div> */}
              <div className="btn_groups">
                <label>Quantity</label>
                <div className="price_btns">
                  <button onClick={() => setQuantity((pre) => pre - 1)}>
                    -
                  </button>
                  <input value={quantity} id="numbr" />
                  <button onClick={() => setQuantity((pre) => pre + 1)}>
                    +
                  </button>
                </div>
              </div>
              <button onClick={() => handleCart(product)} type="button" className="add_cart_btn">
                Add to cart
              </button>
            </div>
          </div>
          <div className="product_desc">
            <h2 className="product_name">{product.title}</h2>
            <p className="description">Description</p>
            <p className="product_description">{product.description}</p>
          </div>
          {/* <div className="product_details aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--1">
            <label>Detail</label>
            <div className="prod_contain1">
              <div className="box">
                <img src={feather} alt="sweat-wicking" />
                <span>Sweat-wicking</span>
              </div>
              <div className="box">
                <img src={feather} alt="Breathable" />
                <span>Breathable</span>
              </div>
            </div>
            <div className="prod_contain2">
              <div className="box">
                <img src={feather} alt="Lightweight fabric" />
                <span>Lightweight fabric</span>
              </div>
              <div className="box">
                <img src={feather} alt="69% nylon, 31% lycra" />
                <span>69% nylon, 31% lycra</span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
