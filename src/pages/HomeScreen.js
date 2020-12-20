import { Col, List, Row, BackTop } from 'antd';
import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import Filter from '../components/Filter';



export default function HomeScreen() {
    const dispatch = useDispatch();
    const productList = useSelector(state => state.productList);
    const { loading, error, products } = productList;
    const [category, setCategory] = useState("All");


    useEffect(() => {
        dispatch(listProducts(category));
    }, [dispatch, category]);


    return (
        <div>
            <Navbar />
            <div id="home">
                <Row>
                    <Col xs={24} sm={24} md={4} lg={4} xl={4} className="left-sidebar">
                        <Filter setCategory={setCategory} category={category} />
                    </Col>
                    <Col xs={24} sm={24} md={20} lg={20} xl={20}>
                        {loading ? (<LoadingBox></LoadingBox>)
                            :
                            error ? (<MessageBox>{error}</MessageBox>)
                                : (

                                    <List
                                        size="large"
                                        dataSource={products}
                                        renderItem={product => (
                                            <Product key={product.id} product={product} />
                                        )}
                                    />

                                )
                        }
                    </Col>
                </Row>
            </div>
            <BackTop>
                <div>Bact to top</div>
            </BackTop>
            <Footer />
        </div>
    )
}
