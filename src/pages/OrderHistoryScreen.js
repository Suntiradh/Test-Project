import { Col, Divider, Row } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listOrderMine } from '../actions/orderActions';
import Footer from '../components/Footer';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Navbar from '../components/Navbar';


export default function OrderHistoryScreen(props) {

  const orderMineList = useSelector((state) => state.orderMineList);
  const { loading, error, orders } = orderMineList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listOrderMine());
  }, [dispatch]);
  
  return (
    <div id="history">
      <Navbar />
      <Row justify='center'>
        <Col>
          <h1>Order History</h1>
          <Divider />
          {loading ? (
            <LoadingBox></LoadingBox>
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (

                <table className="table" align="center">
                  <thead>
                    <tr>
                      <th>NO.</th>
                      <th>DATE BUY</th>
                      <th>TOTAL</th>
                      <th>PAID</th>
                      <th>DELIVERED</th>
                      <th>ORDER</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order) => (
                      <tr key={order.id}>
                        <td>{order.id}</td>
                        <td>{order.createdAt.substring(0, 10)}</td>
                        <td>{order.totalPrice.toFixed(2)}</td>
                        <td>{order.isPaid ? order.paidAt.substring(0, 10) : 'No'}</td>
                        <td>
                          {order.isDelivered
                            ? order.deliveredAt.substring(0, 10)
                            : 'No'}
                        </td>
                        <td>
                          <button
                            type="button"
                            className="small Button button-blue"
                            onClick={() => {
                              props.history.push(`/order/${order.id}`);
                            }}
                          >Details
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
        </Col>
      </Row>

      <Footer />
    </div>
  );
}