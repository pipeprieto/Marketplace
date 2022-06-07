import React, { Component, useState } from 'react'
import registerService from '../../Services/register';
import {
    Routes,
    Route,
    Link,
    useNavigate,
} from 'react-router-dom';

const SignUp = ({ usersList, handleAddUser }) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();


    const handleLogin = async (event) => {
        try {

            const user = await registerService({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password
            })
            if (user != null) {
                navigate('/');
                setFirstName('')
                setLastName('')
                setEmail('')
                setPassword('')
            }


        } catch (error) {
            console.log('Error credentials')
        }

    }


    return (
        <div className="login-root">
            <div
                className="box-root flex-flex flex-direction--column"
                style={{ minHeight: "100vh", flexGrow: 1 }}
            >
                <div className="loginbackground box-background--white padding-top--64">
                    <div className="loginbackground-gridContainer">
                        <div
                            className="box-root flex-flex"
                            style={{ gridArea: "top / start / 8 / end" }}
                        >
                            <div
                                className="box-root"
                                style={{
                                    backgroundImage:
                                        "linear-gradient(white 0%, rgb(247, 250, 252) 33%)",
                                    flexGrow: 1,
                                }}
                            ></div>
                        </div>
                        <div
                            className="box-root flex-flex"
                            style={{ gridArea: "4 / 2 / auto / 5" }}
                        >
                            <div
                                className="box-root box-divider--light-all-2 animationLeftRight tans3s"
                                style={{ flexGrow: 1 }}
                            />
                        </div>
                        <div
                            className="box-root flex-flex"
                            style={{ gridArea: "6 / start / auto / 2" }}
                        >
                            <div
                                className="box-root box-background--blue800"
                                style={{ flexGrow: 1 }}
                            />
                        </div>
                        <div
                            className="box-root flex-flex"
                            style={{ gridArea: "7 / start / auto / 4" }}
                        >
                            <div
                                className="box-root box-background--blue animationLeftRight"
                                style={{ flexGrow: 1 }}
                            />
                        </div>
                        <div
                            className="box-root flex-flex"
                            style={{ gridArea: "8 / 4 / auto / 6" }}
                        >
                            <div
                                className="box-root box-background--gray100 animationLeftRight tans3s"
                                style={{ flexGrow: 1 }}
                            />
                        </div>
                        <div
                            className="box-root flex-flex"
                            style={{ gridArea: "2 / 15 / auto / end" }}
                        >
                            <div
                                className="box-root box-background--red animationRightLeft tans4s"
                                style={{ flexGrow: 1 }}
                            />
                        </div>
                        <div
                            className="box-root flex-flex"
                            style={{ gridArea: "3 / 14 / auto / end" }}
                        >
                            <div
                                className="box-root box-background--blue animationRightLeft"
                                style={{ flexGrow: 1 }}
                            />
                        </div>
                        <div
                            className="box-root flex-flex"
                            style={{ gridArea: "4 / 17 / auto / 20" }}
                        >
                            <div
                                className="box-root box-background--gray100 animationRightLeft tans4s"
                                style={{ flexGrow: 1 }}
                            />
                        </div>
                        <div
                            className="box-root flex-flex"
                            style={{ gridArea: "5 / 14 / auto / 17" }}
                        >
                            <div
                                className="box-root box-divider--light-all-2 animationRightLeft tans3s"
                                style={{ flexGrow: 1 }}
                            />
                        </div>
                        <div
                            className="box-root flex-flex"
                            style={{ gridArea: "6 / start / auto / 4" }}
                        >
                            <div
                                className="box-root box-background--red animationRightLeft tans4s"
                                style={{ flexGrow: 1 }}
                            />
                        </div>
                        {/* <div className="box-root flex-flex" style={{ gridArea: '8 / 4 / auto / start' }}>
                                <div className="box-root box-background--red animationRightLeft tans4s" style={{ flexGrow: 1 }} />
                            </div> */}
                    </div>
                </div>
                <div
                    className="box-root padding-top--24 flex-flex flex-direction--column"
                    style={{ flexGrow: 1, zIndex: 9 }}
                >
                    <div className="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
                        <h1>
                            <a href="/">MarketPlace</a>
                        </h1>
                    </div>
                    <div className="formbg-outer">
                        <div className="formbg">
                            <div className="formbg-inner padding-horizontal--48">
                                <form onSubmit={handleLogin}>
                                    <h3>Sign Up</h3>
                                    <div className="mb-3">
                                        <label>First name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="First name"
                                            onChange={(e) => {
                                                setFirstName(e.target.value);
                                            }}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label>Last name</label>
                                        <input type="text" className="form-control" placeholder="Last name" onChange={(e) => {
                                                setLastName(e.target.value);
                                            }}/>
                                        
                                    </div>
                                    <div className="mb-3">
                                        <label>Email address</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Enter email"
                                            onChange={(e) => {
                                                setEmail(e.target.value);
                                            }}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label>Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            placeholder="Enter password"
                                            onChange={(e) => {
                                                setPassword(e.target.value);
                                            }}
                                        />
                                    </div>
                                    <div className="d-grid">
                                        <button type="submit" className="btn btn-primary">
                                            Sign Up
                                        </button>
                                    </div>
                                    <p className="forgot-password text-right">
                                        Already registered <a href="/">sign in?</a>
                                    </p>
                                </form>
                            </div>
                        </div>
                        <div className="footer-link padding-top--24">
                            <div className="listing padding-top--24 padding-bottom--24 flex-flex center-center">
                                <span>
                                    <a href="/">© Mono's Industries</a>
                                </span>
                                <span>
                                    <a href="/">Contact</a>
                                </span>
                                <span>
                                    <a href="/">Privacy &amp; terms</a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )


}

export default SignUp;
