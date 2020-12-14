import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, List, Button } from 'antd';
import Text from 'antd/lib/typography/Text';
import React from 'react'
import { Link } from 'react-router-dom';



export default function Product(props) {
    const { product } = props;
    return (
        <div key={product.id}>
            <Link to={`/product/${product.id}`}>
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={product.img} />}
                >
                <Text strong>{product.title}</Text>
                <List.Item>
                    <Text>{product.price}</Text>
                </List.Item>
                <Button onClick={() => this.props.addToCart(product)} ><FontAwesomeIcon icon={faShoppingCart} size='2x' />Add to Cart</Button>
            </Card>
            </Link>
        </div>
    )
}