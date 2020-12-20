import { Button, Col, Divider, Input, Row, List, BackTop } from 'antd';
import React, { useEffect, useState } from 'react';
import Text from 'antd/lib/typography/Text';
import axios from 'axios';
import Crud from './Crud';
import Navbar from '../../components/Navbar';


export default function CrudProduct() {
    const [productList, setProductList] = useState([]);
    const [inputTitleField, setInputTitleField] = useState("");
    const [inputImageField, setInputImageField] = useState("");
    const [inputPriceField, setInputPriceField] = useState("");
    const [inputDescriptionField, setInputDescriptionField] = useState("");
    const [inputCategoryField, setInputCategoryField] = useState("");
    const [inputCountInStockField, setInputCountInStockField] = useState("");


    const fetchProductList = async () => {
        const httpResponse = await axios.get("/api/products");
        setProductList(httpResponse.data);
    };

    useEffect(() => {
        fetchProductList();
    }, []);

    const addProductItem = async () => {
        await axios.post("/api/products", {
            title: inputTitleField,
            price: inputPriceField,
            description: inputDescriptionField,
            img: inputImageField,
            category: inputCategoryField,
            countInStock: inputCountInStockField,
            user: JSON.parse(localStorage.getItem('userInfo'))
        });
        fetchProductList();
        setInputTitleField("");
        setInputImageField("");
        setInputPriceField("");
        setInputDescriptionField("");
        setInputCategoryField("");
        setInputCountInStockField("")
    }

    const deleteProductItem = async (id) => {
        await axios.delete(`/api/products/${id}`);
        fetchProductList();
    }

    return (
        <div>
            <Navbar />
            <div id="dashboard">
                <Row justify='center'>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <div className="crud-product">
                            <div className="title-bar">
                                <Text strong>Create Read Update Delete Product</Text>
                            </div>
                            <Divider />
                            <div className="crud-input">
                                <Row>
                                    <Col xs={24} sm={24} md={12} lg={12} xl={12} className="col-box">
                                        <Text strong>Add Product Title</Text>
                                        <Input value={inputTitleField} onChange={(e) => setInputTitleField(e.target.value)} />
                                    </Col>
                                    <Col xs={24} sm={24} md={12} lg={12} xl={12} className="col-box">
                                        <Text strong>Add Product Price</Text>
                                        <Input value={inputPriceField} onChange={(e) => setInputPriceField(e.target.value)} />
                                    </Col>

                                </Row>
                                <Row>
                                    <Col xs={24} sm={24} md={12} lg={12} xl={12} className="col-box">
                                        <Text strong>Add Product In Stock</Text>
                                        <Input value={inputCountInStockField} onChange={(e) => setInputCountInStockField(e.target.value)} />

                                    </Col>
                                    <Col xs={24} sm={24} md={12} lg={12} xl={12} className="col-box">
                                        <Text strong>Add Product Image</Text>
                                        <Input value={inputImageField} onChange={(e) => setInputImageField(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={24} sm={24} md={12} lg={12} xl={12} className="col-box">
                                        <Text strong>Add Product Category</Text>
                                        <Input value={inputCategoryField} onChange={(e) => setInputCategoryField(e.target.value)} />
                                    </Col>
                                    <Col xs={24} sm={24} md={12} lg={12} xl={12} className="col-box">
                                        <Text strong>Add Product Description</Text>
                                        <Input.TextArea value={inputDescriptionField} onChange={(e) => setInputDescriptionField(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row className="padding-bottom0">
                                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                        <Button type="primary" onClick={addProductItem}>Add Product</Button>
                                    </Col>
                                </Row>
                            </div>

                        </div>
                        <br />
                        <br />
                        <div className="show-product">
                            <div className="title-bar">
                                <Text strong>All Product</Text>
                            </div>
                            <Divider />
                            <div className="all-crud">
                                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                    <List
                                        itemLayout="vertical"
                                        className="list-product"
                                        size="large"
                                        dataSource={productList}
                                        renderItem={product => (
                                            <List.Item
                                                title={product.title}
                                            >
                                                <Crud delete={deleteProductItem} fetchData={fetchProductList} product={product} />
                                            </List.Item>
                                        )}
                                    />
                                </Col>
                            </div>
                        </div>
                        <BackTop>
                            <div>Bact to top</div>
                        </BackTop>
                    </Col>
                </Row>
            </div>

        </div>
    )
}  
