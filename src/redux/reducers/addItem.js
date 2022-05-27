import { bindActionCreators } from "redux";

const addItem = [];

const addItems = (state = addItem, action) =>{
    switch (bindActionCreators.type){
        case "ADDITEM" : return[
           ...state,
           action.paylaod 
        ]
        break;
        case "DELITEM" : 
            return state = state.filter((x) => {
                return x.id !== action.payload.id
            })
        break;
        default:
            return state;
        break;
    }
}

export default addItem;