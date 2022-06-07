import { data } from "../product-data";

const product = id => {
    if (window.localStorage.getItem("product") == null) {
        var index = data.map(x => {
            return x.id;
        }).indexOf(id);

        data.splice(index, 1);
        return data;
    } else {
        let productStorage = JSON.parse(window.localStorage.getItem("product"));
        var index = productStorage.map(x => {
            return x.id;
        }).indexOf(id);

        productStorage.splice(index, 1);
        window.localStorage.setItem("product", JSON.stringify(productStorage));
        return productStorage;
    }
}

export default product;