import { Card, Button } from 'antd';
import Text from 'antd/lib/typography/Text';
import React from 'react'
import { Link } from 'react-router-dom';



export default function Product(props) {
    const { product } = props;
    return (
       
        <div className="ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-8 ant-col-lg-8 ant-col-xl-8 home-show-products">
            <div  key={product.id} className="box-products">
               

                <Card cover={<img alt={product.title} src={product.img} />}
                >
                    <h4>{product.title}</h4>
                    <p><Text>{product.price} $</Text></p>
                    <Link to={`/product/${product.id}`}>
                        <Button>View Product Detail</Button>
                    </Link>
                </Card>
                
             </div>
                
            </div >
      
    )
}