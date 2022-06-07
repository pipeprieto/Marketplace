const product = prod => {
    if(window.localStorage.getItem("productos") == null) {
        return null;
    }else{
        let productStorage = JSON.parse(window.localStorage.getItem("productos"));
        let productMap = productStorage.map( product => {
            if(product.id == prod.id){
                product.price = +prod.price;  
            }
            return product
        })
        console.log(productMap)
        window.localStorage.setItem("productos", JSON.stringify(productMap));
        return productMap;
    }
}

export default product;