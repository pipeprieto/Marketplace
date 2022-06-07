import { data } from "../product-data";

const product = prod => {
    console.log(window.localStorage.getItem("product"))
    if(window.localStorage.getItem("product") == null) {
        return null;
    }else{
        let productStorage = JSON.parse(window.localStorage.getItem("product"));
        let productMap = productStorage.map( product => {
            if(product.id === prod.id){
                product.price = prod.price;
            }
        })
        return productMap;
    }
}

export default product;