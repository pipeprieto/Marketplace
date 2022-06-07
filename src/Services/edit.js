import { data } from "../product-data";

const product = prod => {
    console.log(window.localStorage.getItem("productos"))
    if(window.localStorage.getItem("productos") == null) {
       
        return null;

    }else{
        let productStorage = JSON.parse(window.localStorage.getItem("productos"));
        let productMap = productStorage.map( product => {
            if(product.id === prod.id){
                product.price = prod.price;
            }
        })
        return productMap;
    }
}

export default product;