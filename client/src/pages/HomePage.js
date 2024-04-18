import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/cart";

import axios from "axios";
import { Checkbox, Radio } from "antd";
import { Prices } from "../components/Prices";
import toast from "react-hot-toast";

import { NavLink, Link } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import "./HomePage.css";

// carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const HomePage = () => {
  const [cart, setCart] = useCart();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [tvproducts, setTVProducts] = useState([]);
  const [mobileproducts, setMobileProducts] = useState([]);
  const [laptopsproducts, setLaptopProducts] = useState([]);
  const [headphoneproducts, setHeadphoneProducts] = useState([]);
  const [watchesproducts, setWatchesProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  //get all cat
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/category/get-category`
      );
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategory();
    getTotal();
  }, []);


  //get products
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/product-list/${page}`
      );
      setLoading(false);
      setProducts(data.products);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  // get products by category TV

  const getProductByTV = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/category-tv`
      );
      setLoading(false);
      setTVProducts(data.products);
    }
    catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  //  get products by category mobiles

  const getProductByMobiles = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/category-mobiles`
      );
      setLoading(false);
      setMobileProducts(data.products);
    }
    catch (error) {
      setLoading(false);
      console.log(error);
    }
  }


  // get products by category laptops

  const getProductsByLaptops = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/category-laptops`
      );
      setLoading(false);
      setLaptopProducts(data.products);
    }
    catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  // get products by category headphone

  const getProductsByHeadphone = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/category-headphones`
      );
      setLoading(false);
      setHeadphoneProducts(data.products);
    }
    catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  //  get products by category watches

  const getProductsByWatch = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/category-watches`
      );
      setLoading(false);
      setWatchesProducts(data.products);
    }
    catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  //getTOtal COunt
  const getTotal = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/product-count`
      );
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);

  
  //load more
  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/product-list/${page}`
      );
      setLoading(false);
      setProducts([...products, ...data?.products]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // filter by cat
  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };



  useEffect(() => {
    if (!checked.length || !radio.length) {
      getAllProducts();
      getProductByTV();
      getProductByMobiles();
      getProductsByLaptops();
      getProductsByHeadphone();
      getProductsByWatch();
    }
  }, [checked.length, radio.length]);

  useEffect(() => {
    if (checked.length || radio.length) filterProduct();
  }, [checked, radio]);

  //get filterd product
  const filterProduct = async () => {
    try {
      const { data } = await axios.post(`/api/v1/product/product-filters`, {
        checked,
        radio,
      });
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <Layout title={"ALl Products - Best offers "}>
      {/* this show all categories */}
      <div className="container-fluid category-container px-5 bg-dark text-light">
        <div className="d-inline-block">
          <Link className="dropdown-item" to={"/categories"}>
            All Categories
          </Link>
        </div>

        <ul className=" category-show d-inline-block p-0">
          {categories?.map((c) => (
            <li>
              <Link className="dropdown-item" to={`/category/${c.slug}`}>
                {c.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* carousel */}
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="3000">
            <img
              src="images/carousel-1.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img
              src="images/carousel-2.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img
              src="images/carousel-3.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      
      {/* products by category mobiles */}
      <h1 className="text-center mobile ">Mobiles</h1>
          <div className="d-flex flex-wrap mx-5">
            {mobileproducts?.map((p) => (
              <div className="card m-2 text-center shadow" style={{ width: "12rem" }}>
                  <a onClick={() => navigate(`/product/${p.slug}`)} style={{cursor: "pointer"}}>
                  <img
                    src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top px-3"
                    style={{height: '250px', maxWidth: "100%" , maxHeight: "250px" , objectFit: 'contain'}}
                    
                    alt={p.name}
                  />
                  <div className="card-body text-start">
                    <h6 className="card-title">{p.name.substring(0, 32)}...</h6>
                    
                    <p className="card-text fw-bold">
                      {p?.price?.toLocaleString("en-IN", {
                        style: "currency",
                        currency: "INR",
                      })}
                    </p>
                    
                  </div>
                </a>
              </div>
            ))}
          </div>



      {/* products by category TV */}
      <h1 className="text-center tv ">TVs</h1>
          <div className="d-flex flex-wrap mx-5">
            {tvproducts?.map((p) => (
              <div className="card m-2 text-center shadow" style={{ width: "12rem" }}>
                  <a onClick={() => navigate(`/product/${p.slug}`)} style={{cursor: "pointer"}}>
                  <img
                    src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top px-3"
                    style={{height: '250px', maxWidth: "100%" , maxHeight: "250px" , objectFit: 'contain'}}
                    
                    alt={p.name}
                  />
                  <div className="card-body text-start">
                    <h6 className="card-title">{p.name.substring(0, 32)}...</h6>
                    
                    <p className="card-text fw-bold">
                      {p?.price?.toLocaleString("en-IN", {
                        style: "currency",
                        currency: "INR",
                      })}
                    </p>
                    
                  </div>
                </a>
              </div>
            ))}
          </div>

      
      {/* products by category laptops */}
      <h1 className="text-center laptop ">Laptops</h1>
          <div className="d-flex flex-wrap mx-5">
            {laptopsproducts?.map((p) => (
              <div className="card m-2 text-center shadow" style={{ width: "12rem" }}>
                  <a onClick={() => navigate(`/product/${p.slug}`)} style={{cursor: "pointer"}}>
                  <img
                    src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top px-3"
                    style={{height: '250px', maxWidth: "100%" , maxHeight: "250px" , objectFit: 'contain'}}
                    
                    alt={p.name}
                  />
                  <div className="card-body text-start">
                    <h6 className="card-title">{p.name.substring(0, 32)}...</h6>
                    
                    <p className="card-text fw-bold">
                      {p?.price?.toLocaleString("en-IN", {
                        style: "currency",
                        currency: "INR",
                      })}
                    </p>
                    
                  </div>
                </a>
              </div>
            ))}
          </div>

      
      {/* products by category Headphones */}
      <h1 className="text-center headphone ">Headphones</h1>
          <div className="d-flex flex-wrap mx-5">
            {headphoneproducts?.map((p) => (
              <div className="card m-2 text-center shadow" style={{ width: "12rem" }}>
                  <a onClick={() => navigate(`/product/${p.slug}`)} style={{cursor: "pointer"}}>
                  <img
                    src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top px-3"
                    style={{height: '250px', maxWidth: "100%" , maxHeight: "250px" , objectFit: 'contain'}}
                    
                    alt={p.name}
                  />
                  <div className="card-body text-start">
                    <h6 className="card-title">{p.name.substring(0, 32)}...</h6>
                    
                    <p className="card-text fw-bold">
                      {p?.price?.toLocaleString("en-IN", {
                        style: "currency",
                        currency: "INR",
                      })}
                    </p>
                    
                  </div>
                </a>
              </div>
            ))}
          </div>

      
      {/* products by category watches */}
      <h1 className="text-center watches ">Watches</h1>
          <div className="d-flex flex-wrap mx-5">
            {watchesproducts?.map((p) => (
              <div className="card m-2 text-center shadow" style={{ width: "12rem" }}>
                  <a onClick={() => navigate(`/product/${p.slug}`)} style={{cursor: "pointer"}}>
                  <img
                    src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top px-3"
                    style={{height: '250px', maxWidth: "100%" , maxHeight: "250px" , objectFit: 'contain'}}
                    
                    alt={p.name}
                  />
                  <div className="card-body text-start">
                    <h6 className="card-title">{p.name.substring(0, 32)}...</h6>
                    
                    <p className="card-text fw-bold">
                      {p?.price?.toLocaleString("en-IN", {
                        style: "currency",
                        currency: "INR",
                      })}
                    </p>
                    
                  </div>
                </a>
              </div>
            ))}
          </div>

      
      
      
      {/* All products */}
      
        
      <h1 className="text-center all ">Products Available</h1>
          <div className="d-flex flex-wrap mx-5">
            {products?.map((p) => (
              <div className="card m-2 text-center shadow" style={{ width: "12rem" }}>
                  <a onClick={() => navigate(`/product/${p.slug}`)} style={{cursor: "pointer"}}>
                  <img
                    src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top px-3"
                    style={{height: '250px', maxWidth: "100%" , maxHeight: "250px" , objectFit: 'contain'}}
                    
                    alt={p.name}
                  />
                  <div className="card-body text-start">
                    <h6 className="card-title">{p.name.substring(0, 32)}...</h6>
                    
                    <p className="card-text fw-bold">
                      {p?.price?.toLocaleString("en-IN", {
                        style: "currency",
                        currency: "INR",
                      })}
                    </p>
                    
                  </div>
                </a>
              </div>
            ))}
          </div>
          <div className="m-2 p-3">
            {products && products.length < total && (
              <button
                className="btn text-white"
                style={{background: "orangered"}}
                onClick={(e) => {
                  e.preventDefault();
                  setPage(page + 1);
                }}
              >
                {loading ? "Loading ..." : "Loadmore"}
              </button>
            )}
          </div>
        
        
              
     
      
      
    </Layout>
  );
};

export default HomePage;
