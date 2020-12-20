import React, { useState } from 'react';
import { Button, Col, Input, Row } from 'antd';
import axios from 'axios';
import Text from 'antd/lib/typography/Text';



export default function Crud(props) {

    const [changeTitleInput, setChangeTitleInput] = useState("");
    const [changePriceInput, setChangePriceInput] = useState("");
    const [changeDescriptionInput, setChangeDescriptionInput] = useState("");
    const [changeImageInput, setChangeImageInput] = useState("");
    const [changeCategoryInput, setChangeCategoryInput] = useState("");
    const [changeCountInStockInput, setChangeCountInStockInput] = useState("");
    const [isEditTitle, setIsEditTitle] = useState(false);
    const [isEditPrice, setIsEditPrice] = useState(false);
    const [isEditDescription, setIsEditDescription] = useState(false);
    const [isEditImage, setIsEditImage] = useState(false);
    const [isEditCategory, setIsEditCategory] = useState(false);
    const [isEditCountInStock, setIsEditCountInStock] = useState(false);

    const updateProductTitle = async (id) => {
        await axios.put(`/api/products/${id}`, {
            title: changeTitleInput,
            user: JSON.parse(localStorage.getItem('userInfo'))
        });
        props.fetchData();
        setIsEditTitle(false);
    };

    const updateProductPrice = async (id) => {
        await axios.put(`/api/products/${id}`, {
            price: changePriceInput,
            user: JSON.parse(localStorage.getItem('userInfo'))
        });
        props.fetchData();
        setIsEditPrice(false);
    };

    const updateProductDescription = async (id) => {
        await axios.put(`/api/products/${id}`, {
            description: changeDescriptionInput,
            user: JSON.parse(localStorage.getItem('userInfo'))
        });
        props.fetchData();
        setIsEditDescription(false);
    };

    const updateProductImage = async (id) => {
        await axios.put(`/api/products/${id}`, {
            img: changeImageInput,
            user: JSON.parse(localStorage.getItem('userInfo'))
        });
        props.fetchData();
        setIsEditImage(false);
    };

    const updateProductCategory = async (id) => {
        await axios.put(`/api/products/${id}`, {
            category: changeCategoryInput,
            user: JSON.parse(localStorage.getItem('userInfo'))
        });
        props.fetchData();
        setIsEditCategory(false);
    };

    const updateProductQuantity = async (id) => {
        await axios.put(`/api/products/${id}`, {
            countInStock: changeCountInStockInput,
            user: JSON.parse(localStorage.getItem('userInfo'))
        });
        props.fetchData();
        setIsEditCountInStock(false);
    };

    const toggleEditTitle = () => {
        setChangeTitleInput(props.product.title)
        setIsEditTitle(true)
    };

    const toggleEditPrice = () => {
        setChangePriceInput(props.product.price)
        setIsEditPrice(true)
    };

    const toggleEditDescription = () => {
        setChangeDescriptionInput(props.product.description)
        setIsEditDescription(true)
    };

    const toggleEditImage = () => {
        setChangeImageInput(props.product.img)
        setIsEditImage(true)
    };

    const toggleEditCategory = () => {
        setChangeCategoryInput(props.product.category)
        setIsEditCategory(true)
    };

    const toggleEditQuantity = () => {
        setChangeCountInStockInput(props.product.countInStock)
        setIsEditCountInStock(true)
    };


    let titleContents = (
        <div>
            <Input value={changeTitleInput} onChange={(e) => setChangeTitleInput(e.target.value)} /><br /><br />
            <Button type="primary" onClick={() => updateProductTitle(props.product.id)}>Done</Button>
        </div>

    );

    if (!isEditTitle) {
        titleContents = (
            <div>
                {props.product.title}<br /><br />
                <Button type="primary" onClick={() => toggleEditTitle()}>Edit</Button>
            </div>
        )
    };

    let priceContents = (
        <div>
            <Input value={changePriceInput} onChange={(e) => setChangePriceInput(e.target.value)} /><br /><br />
            <Button type="primary" onClick={() => updateProductPrice(props.product.id)}>Done</Button>
        </div>
    )

    if (!isEditPrice) {
        priceContents = (
            <div>
                {props.product.price} $ <br /><br />
                <Button type="primary" onClick={() => toggleEditPrice()}>Edit</Button>
            </div>
        )
    }

    let descriptionContents = (
        <div>
            <Input.TextArea value={changeDescriptionInput} onChange={(e) => setChangeDescriptionInput(e.target.value)} /><br /><br />
            <Button type="primary" onClick={() => updateProductDescription(props.product.id)}>Done</Button>
        </div>
    )

    if (!isEditDescription) {
        descriptionContents = (
            <div>
                {props.product.description}<br /><br /><br />
                <Button type="primary" onClick={() => toggleEditDescription()}>Edit</Button>
            </div>
        )
    }

    let imageContents = (
        <div>
            <Input value={changeImageInput} onChange={(e) => setChangeImageInput(e.target.value)} /><br /><br />
            <Button type="primary" onClick={() => updateProductImage(props.product.id)}>Done</Button>
        </div>
    )

    if (!isEditImage) {
        imageContents = (
            <div>
                <img width={100} alt="image" src={props.product.img} /><br /><br />
                <Button type="primary" onClick={() => toggleEditImage()}>Edit</Button>
            </div>
        )
    }

    let categoryContents = (
        <div>
            <Input value={changeCategoryInput} onChange={(e) => setChangeCategoryInput(e.target.value)} /><br /><br />
            <Button type="primary" onClick={() => updateProductCategory(props.product.id)}>Done</Button>
        </div>

    )

    if (!isEditCategory) {
        categoryContents = (
            <div>
                {props.product.category}<br /><br />
                <Button type="primary" onClick={() => toggleEditCategory()}>Edit</Button>
            </div>
        )
    }

    let countInStockContents = (
        <div>
            <Input value={changeCountInStockInput} onChange={(e) => setChangeCountInStockInput(e.target.value)} /><br /><br />
            <Button type="primary" onClick={() => updateProductQuantity(props.product.id)}>Done</Button>
        </div>

    )

    if (!isEditCountInStock) {
        countInStockContents = (
            <div>
                {props.product.countInStock}<br /><br />
                <Button type="primary" onClick={() => toggleEditQuantity()}>Edit</Button>
            </div>
        )
    }

    return (
        <div>
            <div>
                <div className="dashboard-product-show">
                    <table className="table-edit-delete">
                        <thead>
                            <tr>
                                <th><Text strong>Title</Text></th>
                                <th><Text strong>Price</Text></th>
                                <th><Text strong>Category</Text></th>
                                <th><Text strong>Quantity</Text></th>
                                <th><Text strong>Image</Text></th>
                                <th className="border-right0"><Text strong>Description</Text></th>

                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>{titleContents}</td>
                                <td>{priceContents}</td>
                                <td>{categoryContents}</td>
                                <td>{countInStockContents}</td>
                                <td>{imageContents}</td>
                                <td className="col-description-contents border-right0">{descriptionContents}</td>

                            </tr>
                        </tbody>
                    </table>
                    <br />
                   
                        <Col xs={24} sm={24} md={24} lg={24} xl={24} className="text-right">
                            <Button type='danger' onClick={() => props.delete(props.product.id)}>Delete</Button>
                        </Col>
                   
                </div>
            </div>
        </div>
    )
}