import { Button, Divider } from 'antd';
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
    <div>
      <Navbar />
      <Divider />
      {loading ? (<LoadingBox></LoadingBox>)
        :
        error ? (<MessageBox>{error}</MessageBox>)
          : (
            <div>
              <Link to="/">Back to result</Link>
              <div className="row top">
                <div className="col-2">
                  <img className="large" src={product.img} alt={product.title}></img>
                </div>
                <div className="col-1">
                  <ul>
                    <li>
                      <h1>{product.title}</h1>
                    </li>
                    <li>Price : ${product.price}</li>
                    <li>
                      Description:
              <p>{product.description}</p>
                    </li>
                  </ul>
                </div>
                <div className="col-1">
                  <div className="card card-body">
                    <ul>
                      <li>
                        <div className="row">
                          <div>Price</div>
                          <div className="price">${product.price}</div>
                        </div>
                      </li>
                      <li>
                        <div className="row">
                          <div>Status</div>
                          <div>
                            {product.countInStock > 0 ? (
                              <span className="success">In Stock</span>
                            ) : (
                                <span className="error">Unavailable</span>
                              )}
                          </div>
                        </div>
                      </li>
                      {
                        product.countInStock > 0 && (
                          <>
                            <li>
                              <div>
                                <div>Qty</div>
                                <div>
                                  <select value={qty} onChange={e => setQty(e.target.value)}>
                                    {
                                      [...Array(product.countInStock).keys()].map(x => (
                                        <option key={x+1} value={x + 1}>{x + 1}</option>
                                      ))
                                    }
                                  </select>
                                </div>
                              </div>
                            </li>
                            <li>
                              <Button onClick={addToCartHandler} >Add to Cart</Button>
                            </li>
                          </>
                        )
                      }
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
      <Footer />
    </div>

  );
}
