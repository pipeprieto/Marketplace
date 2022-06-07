import React from "react";
import { Link } from "react-router-dom";
import { FcPlus } from "react-icons/fc";
import styled from "styled-components";
export default function SignUp() {
  return (
    <Container>
      <IconContainer>
        <FcPlus size="2rem" />
      </IconContainer>
      <Title>Registrate</Title>
      <Label>Primer Nombre</Label>
      <Input type="text" name="name" placeholder="Luis" />
      <Label>Apellido</Label>
      <Input type="text" name="apellido" placeholder="Llanos" />
      <Label>Correo</Label>
      <Input type="email" name="correo" placeholder="Luis@uninorte.edu.co" />
      <Label>Contraseña</Label>
      <Input type="password" name="password" />
      <Link to="/">
        <Button>
          <LinkText>Registrarse</LinkText>
        </Button>
      </Link>
      <p className="forgot-password text-right">
        Already registered <Link to="/">sign in</Link>
      </p>
    </Container>

    // <div className="login-root">
    //     <div
    //         className="box-root flex-flex flex-direction--column"
    //         style={{ minHeight: "100vh", flexGrow: 1 }}
    //     >
    //         <div className="loginbackground box-background--white padding-top--64">
    //             <div className="loginbackground-gridContainer">
    //                 <div
    //                     className="box-root flex-flex"
    //                     style={{ gridArea: "top / start / 8 / end" }}
    //                 >
    //                     <div
    //                         className="box-root"
    //                         style={{
    //                             backgroundImage:
    //                                 "linear-gradient(white 0%, rgb(247, 250, 252) 33%)",
    //                             flexGrow: 1,
    //                         }}
    //                     ></div>
    //                 </div>
    //                 <div
    //                     className="box-root flex-flex"
    //                     style={{ gridArea: "4 / 2 / auto / 5" }}
    //                 >
    //                     <div
    //                         className="box-root box-divider--light-all-2 animationLeftRight tans3s"
    //                         style={{ flexGrow: 1 }}
    //                     />
    //                 </div>
    //                 <div
    //                     className="box-root flex-flex"
    //                     style={{ gridArea: "6 / start / auto / 2" }}
    //                 >
    //                     <div
    //                         className="box-root box-background--blue800"
    //                         style={{ flexGrow: 1 }}
    //                     />
    //                 </div>
    //                 <div
    //                     className="box-root flex-flex"
    //                     style={{ gridArea: "7 / start / auto / 4" }}
    //                 >
    //                     <div
    //                         className="box-root box-background--blue animationLeftRight"
    //                         style={{ flexGrow: 1 }}
    //                     />
    //                 </div>
    //                 <div
    //                     className="box-root flex-flex"
    //                     style={{ gridArea: "8 / 4 / auto / 6" }}
    //                 >
    //                     <div
    //                         className="box-root box-background--gray100 animationLeftRight tans3s"
    //                         style={{ flexGrow: 1 }}
    //                     />
    //                 </div>
    //                 <div
    //                     className="box-root flex-flex"
    //                     style={{ gridArea: "2 / 15 / auto / end" }}
    //                 >
    //                     <div
    //                         className="box-root box-background--red animationRightLeft tans4s"
    //                         style={{ flexGrow: 1 }}
    //                     />
    //                 </div>
    //                 <div
    //                     className="box-root flex-flex"
    //                     style={{ gridArea: "3 / 14 / auto / end" }}
    //                 >
    //                     <div
    //                         className="box-root box-background--blue animationRightLeft"
    //                         style={{ flexGrow: 1 }}
    //                     />
    //                 </div>
    //                 <div
    //                     className="box-root flex-flex"
    //                     style={{ gridArea: "4 / 17 / auto / 20" }}
    //                 >
    //                     <div
    //                         className="box-root box-background--gray100 animationRightLeft tans4s"
    //                         style={{ flexGrow: 1 }}
    //                     />
    //                 </div>
    //                 <div
    //                     className="box-root flex-flex"
    //                     style={{ gridArea: "5 / 14 / auto / 17" }}
    //                 >
    //                     <div
    //                         className="box-root box-divider--light-all-2 animationRightLeft tans3s"
    //                         style={{ flexGrow: 1 }}
    //                     />
    //                 </div>
    //                 <div
    //                     className="box-root flex-flex"
    //                     style={{ gridArea: "6 / start / auto / 4" }}
    //                 >
    //                     <div
    //                         className="box-root box-background--red animationRightLeft tans4s"
    //                         style={{ flexGrow: 1 }}
    //                     />
    //                 </div>
    //                 {/* <div className="box-root flex-flex" style={{ gridArea: '8 / 4 / auto / start' }}>
    //                     <div className="box-root box-background--red animationRightLeft tans4s" style={{ flexGrow: 1 }} />
    //                 </div> */}
    //             </div>
    //         </div>
    //         <div
    //             className="box-root padding-top--24 flex-flex flex-direction--column"
    //             style={{ flexGrow: 1, zIndex: 9 }}
    //         >
    //             <div className="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
    //                 <h1>
    //                     <a href="/">MarketPlace</a>
    //                 </h1>
    //             </div>
    //             <div className="formbg-outer">
    //                 <div className="formbg">
    //                     <div className="formbg-inner padding-horizontal--48">
    //                         <form>
    //                             <h3>Sign Up</h3>
    //                             <div className="mb-3">
    //                                 <label>First name</label>
    //                                 <input
    //                                     type="text"
    //                                     className="form-control"
    //                                     placeholder="First name"
    //                                 />
    //                             </div>
    //                             <div className="mb-3">
    //                                 <label>Last name</label>
    //                                 <input type="text" className="form-control" placeholder="Last name" />
    //                             </div>
    //                             <div className="mb-3">
    //                                 <label>Email address</label>
    //                                 <input
    //                                     type="email"
    //                                     className="form-control"
    //                                     placeholder="Enter email"
    //                                 />
    //                             </div>
    //                             <div className="mb-3">
    //                                 <label>Password</label>
    //                                 <input
    //                                     type="password"
    //                                     className="form-control"
    //                                     placeholder="Enter password"
    //                                 />
    //                             </div>
    //                             <div className="d-grid">
    //                                 <button type="submit" className="btn btn-primary">
    //                                     Sign Up
    //                                 </button>
    //                             </div>
    //                             <p className="forgot-password text-right">
    //                                 Already registered <a href="/sign-in">sign in?</a>
    //                             </p>
    //                         </form>
    //                     </div>
    //                 </div>
    //                 <div className="footer-link padding-top--24">
    //                     <div className="listing padding-top--24 padding-bottom--24 flex-flex center-center">
    //                         <span>
    //                             <a href="/">© Mono's Industries</a>
    //                         </span>
    //                         <span>
    //                             <a href="/">Contact</a>
    //                         </span>
    //                         <span>
    //                             <a href="/">Privacy &amp; terms</a>
    //                         </span>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>
  );
}

const Container = styled.div`
  margin: auto;
  width: 50%;
  height: auto;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.125rem;
  box-shadow: 0 1rem 1rem -0.75rem rgba(0, 0, 0, 0.125);
  display: flex;
  flex-direction: column;
  padding: 1rem;
  text-align: center;
  margin-top: 8rem;
`;
const Title = styled.p`
  font-weight: bold;
  color: #000;
  font-size: 24px;
`;
const Label = styled.label`
  margin-top: 1rem;
`;
const Button = styled.div`
    background-color: #0d6efd;
    color:#fff:
    text-align:center;
    border:none;
    border-radius: 0.5rem;
    margin:auto;
    width:5rem;
    margin-top: 1rem;   
    font-weight: 400;
  line-height: 1.5;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  width: 50%;

  `;
const LinkText = styled.p`
  text-decoration: none;
  color: white;
`;
const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  width: 80%;
  margin: auto;
`;
