import React, { useContext, useState } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";
import { data } from '../../../product-data';
import deleteProduct from "../../../Services/delete";


export default function ModalDelete(props) {

   
    const [proname, setProname] = useState("");
    const [productId, setproductId] = useState("");

    const handleClickModal = () => {
        deleteToCart()
    }
    const deleteToCart = () => {
        deleteProduct(productId);
        props.onClose();
    };

    if (!props.isOpen) {
        return null;
    }

    return ReactDOM.createPortal(
        <div className="Modal">
            <div className="Modal__container">
                <button className="Modal__close-button" onClick={props.onClose}>
                    x
                </button>
                <div >
                    <div>
                        <h1>Eliminar un producto</h1>
                        <label>ingrese el id* del producto a eliminar:</label>
                        <input className="" type="text" onChange={(e) => {setproductId(e.target.value);}} required/>
                       
                    </div>
                    <button className="btn--cart" onClick={() => handleClickModal()}>
                            Eliminar Producto
                        </button>
                </div>
            </div>
        </div>,
        document.getElementById("modaldelete"), 
    );
}