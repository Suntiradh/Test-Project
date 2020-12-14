import { Col, Divider, List, Row } from 'antd';
import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';

export default function HomeScreen() {
    const dispatch = useDispatch();
    const productList = useSelector(state => state.productList);
    const { loading, error, products } = productList;

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    return (
        <div>
            <Navbar />
            <Divider />
            {loading ? (<LoadingBox></LoadingBox>)
                :
                error ? (<MessageBox>{error}</MessageBox>)
                    : (<Row justify='center'>
                        <Col span={16}>
                            <List
                                size="large"
                                dataSource={products}
                                renderItem={product => (
                                    <Product key={product.id} product={product} />
                                )}
                            />
                        </Col>
                    </Row>)
            }
            <Footer />
        </div>
    )
}
