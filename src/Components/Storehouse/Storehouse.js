import React, { Component } from "react";

import "./Storehouse.css";
import ModalDelete from "./modal/ModalDelP";
import ModalEdit from "./modal/ModalEditP";


export default class Storehouse extends Component {
  state = {
    openModal2: false,
    openModal3: false
  };
  componentDidMount() {
    
  }

  render() {
    let productStorage = JSON.parse(window.localStorage.getItem("productos"));

    const handleOpenModal2 = () => {
      this.setState({ openModal2: true });
    };
    const handleOpenModal3 = () => {
      this.setState({ openModal3: true });
    }

    return (
      <div className="back">
        <div className="row">
          <div className="column1">
            <div className="container_bnt">
              <div className="container">
                <button className="btn btn1" onClick={() => handleOpenModal3()}>
                  Editar Producto
                </button>
                <button className="btn btn1" onClick={() => handleOpenModal2()}>
                  Eliminar Producto
                </button>
              </div>
            </div>
          </div>
          <div className="column2">
            <div className="container_bnt">
              {/* Map products with name, id, cuantity price */}
              <div style={{ paddingBottom: "0.1px" }}>
                <div className="table-wrapper" style={{ overflow: "auto" }}>
                  <table className="fl-table sortable" id="usersTable">
                    <thead>
                      <tr>
                        <th>Id</th>
                        <th>Titulo</th>
                        <th>Precio</th>
                        <th>Categoria</th>
                        <th>Rating</th>
                      </tr>
                    </thead>
                    <tbody>
                      {productStorage.map((item, index) => (
                        <tr className="item" key={index}>
                          <td>{item.id}</td>
                          <td>{item.title}</td>
                          <td>{item.price}</td>
                          <td>{item.category}</td>
                          <td>{item.rate}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div>
              <p>-</p>
            </div>
          </div>
        </div>
        <ModalDelete
          isOpen={this.state.openModal2}
          onClose={() => this.setState({ openModal2: false })}
        >
          Lorem
        </ModalDelete>
        <ModalEdit
          isOpen={this.state.openModal3}
          onClose={() => this.setState({ openModal3: false })}
        >
          Lorem
        </ModalEdit>
      </div>
    );
  }
}