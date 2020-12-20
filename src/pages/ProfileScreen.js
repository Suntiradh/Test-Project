import { Col, Divider, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsUser, updateUserProfile } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ProfileScreen() {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const userDetails = useSelector((state) => state.userDetails);
    const { loading, error, user } = userDetails;
    const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
    const {
        success: successUpdate,
        error: errorUpdate,
        loading: loadingUpdate,
    } = userUpdateProfile;
    const dispatch = useDispatch();


    useEffect(() => {
        if (!user) {
            dispatch({ type: USER_UPDATE_PROFILE_RESET });
            dispatch(detailsUser(userInfo.id));
        } else {
            setName(user.name);
            setUsername(user.username);
        }
    }, [dispatch, userInfo.id, user]);


    const submitHandler = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Password and Confirm Password Are Not Matched');
        } else {
            dispatch(updateUserProfile({ userId: user.id, name, username, password }));
        }
    };
    return (
        <div>
            <Navbar />

            <Row justify="center">
                <Col xs={24} sm={24} md={15} lg={8} xl={8}>
                    <form className="form update-profile" onSubmit={submitHandler}>
                        <div>
                            <h1>User Profile</h1>
                            <Divider />
                        </div>
                        {loading ? (
                            <LoadingBox></LoadingBox>
                        ) : error ? (
                            <MessageBox variant="danger">{error}</MessageBox>
                        ) : (
                                    <>
                                        {loadingUpdate && <LoadingBox></LoadingBox>}
                                        {errorUpdate && (
                                            <MessageBox variant="danger">{errorUpdate}</MessageBox>
                                        )}
                                        {successUpdate && (
                                            <MessageBox variant="success">
                                                Profile Updated Successfully
                                            </MessageBox>
                                        )}
                                        <div>                                           
                                            <input
                                                id="name"
                                                type="text"
                                                placeholder="Enter name"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                            ></input>
                                        </div>
                                        <div>                                           
                                            <input
                                                id="username"
                                                type="username"
                                                placeholder="Enter email"
                                                value={username}
                                                onChange={(e) => setUsername(e.target.value)}
                                            ></input>
                                        </div>
                                        <div>
                                            <input
                                                id="password"
                                                type="password"
                                                placeholder="Enter password"
                                                onChange={(e) => setPassword(e.target.value)}
                                            ></input>
                                        </div>
                                        <div>
                                            <input
                                                id="confirmPassword"
                                                type="password"
                                                placeholder="Enter confirm password"
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                            ></input>
                                        </div>
                                        <div>
                                            <label />
                                            <button className="primary Button button-blue" type="submit">Update</button>
                                        </div>
                                    </>
                                )}
                    </form>
                </Col>
            </Row>
            <Footer />

        </div>
    );
}