import { Button, Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsProduct } from '../actions/productActions';
import Footer from '../components/Footer';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Navbar from '../components/Navbar';


export default function ProductScreen(props) {
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const [qty, setQty] = useState(1);
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);

  const addToCartHandler = () => {
    props.history.push(`/cart/${productId}?qty=${qty}`);
  }

  return (
    <div >
      <Navbar />

      <div id="product-detail">
        <Row>

          {loading ? (<LoadingBox></LoadingBox>)
            :
            error ? (<MessageBox>{error}</MessageBox>)
              : (
                <>

                  <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <div className="box-img-product">
                      <img className="img-product" src={product.img} alt={product.title}></img>
                    </div>
                  </Col>
                  <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <div>
                      <div className="card card-body">
                        <ul>
                          <li><h1>{product.title}</h1> </li>
                          <li>
                            <div className="row"><h3>Price: ${product.price}</h3></div>
                          </li>
                          <li>
                            <div className="product-description">
                              <strong>Description:</strong>
                              <p>{product.description}</p>
                            </div>
                          </li>
                          <li>
                            <div className="row">
                              <div>
                                {product.countInStock > 0 ? (
                                  <span className="success">In Stock</span>
                                ) : (
                                    <span className="error">Out of Stock</span>
                                  )}
                              </div>
                            </div>
                          </li>
                          {
                            product.countInStock > 0 && (
                              <>
                                <li>
                                  <div>
                                    <div>
                                      <select className="quantity-select" value={qty} onChange={e => setQty(e.target.value)}>
                                        {
                                          [...Array(product.countInStock).keys()].map(x => (
                                            <option key={x + 1} value={x + 1}>{x + 1}</option>
                                          ))
                                        }
                                      </select>
                                      <Button onClick={addToCartHandler} className="add-to-cart">Add to Cart</Button>
                                    </div>
                                  </div>
                                </li>
                              </>
                            )
                          }
                          <li>
                            <div className="product-category">
                              <strong>Category:</strong> {product.category}
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Col>
                </>
              )}
        </Row>
        <Row justify="center" className="padding-bottom0">
          <Col>
            <Link to="/" className="Button button-white">Return to Shop</Link>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>

  );
}
