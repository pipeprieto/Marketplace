const product = id => {
    if (window.localStorage.getItem("productos") == null) {
        return null
    } else {
        let productStorage = JSON.parse(window.localStorage.getItem("productos"));
        let newProducts = []
        productStorage.forEach(element => {
            if(element.id != id){
                newProducts.push(element)
            }
        });
        console.log(newProducts)
        window.localStorage.setItem("productos", JSON.stringify(newProducts));
        return productStorage;
    }
}

export default product;