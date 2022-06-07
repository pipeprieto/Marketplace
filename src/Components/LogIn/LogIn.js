import React, { useEffect, useState } from "react";
import "./LogIn.css";
import loginService from "../../Services/login"
import {
    Routes,
    Route,
    Link,
    useNavigate,
} from 'react-router-dom';

function LoginForm() {

    const [user, setUser] = useState(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const user = await loginService({
                email,
                password
            })
            console.log(user )
            if (Object.keys(user).length != 0) {
                navigate('/productlist');
                setUser(user)
                setEmail('')
                setPassword('')
            }else{
                if(email === 'admin' && password === '12345'){
                    navigate('/storehouse')
                }
            }
        } catch (error) {
            console.log('Error credentials')
        }
    };

    return (
        <div>
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
                                    <span className="padding-bottom--15">
                                        Iniciar sesión en su cuenta
                                    </span>
                                    <div className="field padding-bottom--24">
                                        <label htmlFor="text">Email</label>
                                        <input
                                            type="text"
                                            name="user"
                                            onChange={(e) => {
                                                setEmail(e.target.value);
                                            }}
                                        />
                                    </div>
                                    <div className="field padding-bottom--24">
                                        <div className="grid--50-50">
                                            <label htmlFor="password">Contraseña</label>
                                        </div>
                                        <input
                                            type="password"
                                            name="password"
                                            onChange={(e) => {
                                                setPassword(e.target.value);
                                            }}
                                        />
                                    </div>

                                    <div className="field padding-bottom--24">
                                        <input
                                            className="button"
                                            type="submit"
                                            name="submit"
                                            value="Ingresar"
                                            onClick={() => handleLogin()}
                                        />
                                    </div>

                                    <p className="forgot-password text-right">
                                        No te has registrado? <a href="/sign-up">registrate aqui</a>
                                    </p>
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
        </div>
    );
}

export default LoginForm;