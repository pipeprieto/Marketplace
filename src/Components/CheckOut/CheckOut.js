import React from "react";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import styled from "styled-components";
const CheckOut = ({ totalPrice, handleCartClearance }) => {
  const alert = useAlert();

  const checkOut = () => {
    alert.show("Succesfull Purchase");
    handleCartClearance();
  };

  return (
    <>
      <Container>
        <Wrapper>
          <Top>
            <Link to="/cart">
              <TopButton>Back</TopButton>
            </Link>
            <Title> CheckOut </Title>
            <div></div>
          </Top>
          <Bottom>
            <Info>
              <div className="card">
                <div className="card-header">
                  <h4>Basic Information</h4>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group mb-3">
                        <label> First Name</label>
                        <input
                          type="text"
                          name="firstname"
                          className="form-control"
                        ></input>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group mb-3">
                        <label> Last Name</label>
                        <input
                          type="text"
                          name="lastname"
                          className="form-control"
                        ></input>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group mb-3">
                        <label> Phone Number</label>
                        <input
                          type="text"
                          name="phone"
                          className="form-control"
                        ></input>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group mb-3">
                        <label>Email Address</label>
                        <input
                          type="text"
                          name="email"
                          className="form-control"
                        ></input>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group mb-3">
                        <label> Full Address</label>
                        <textarea rows="3" className="form-control"></textarea>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group mb-3">
                        <label> City </label>
                        <input
                          type="text"
                          name="city"
                          className="form-control"
                        ></input>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group mb-3">
                        <label> State </label>
                        <input
                          type="text"
                          name="state"
                          className="form-control"
                        ></input>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group mb-3">
                        <label> Postal Code </label>
                        <input
                          type="text"
                          name="postalcode"
                          className="form-control"
                        ></input>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group text-end">
                        <Link to="/productlist">
                          <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => checkOut()}
                          >
                            Pay ${totalPrice}
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Info>
          </Bottom>
        </Wrapper>
      </Container>
    </>
  );
};

export default CheckOut;

const Container = styled.div``;

const Info = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const Bottom = styled.div``;

const TopButton = styled.button`
  width: 100px;
  padding: px;
  background-color: #0d6efd;
  color: white;
  font-weight: 400;
  border: 0;
`;

const Title = styled.h1`
  font-weight: 700;
  text-align: center;
  font-size: 30px;
`;
