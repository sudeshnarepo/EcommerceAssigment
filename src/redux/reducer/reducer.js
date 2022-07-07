const initialState = {
  allProduct: [],
  loading: true,
  cart: [],
  category: ""  
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "setAllitem": {
      return { ...state, allProduct: action.payload };
    }
    case "setLoading": {
      return { ...state, loading: action.payload };
    }
    case "remove": {
      let updateCart = state.cart.filter((item) => item.id !== action.payload);
      return { ...state, cart: updateCart };
    }
    case "filterCategory":{
      console.log(state.allProduct);
      let filterCat = state.allProduct.filter((cat => cat.category === action.payload));
      console.log("filterCat", filterCat);
      return {...state, allProduct: filterCat};
    }
    case "increaseQt": {
      const findProductIndex = state.cart.findIndex(
        (pro) => pro.id === action.payload
      );

      const findProduct = state.cart[findProductIndex];

      let update = {
        ...findProduct,
        quantity: findProduct.quantity + 1,
      };
      const cartData = [...state.cart];
      cartData[findProductIndex] = update;
      return { ...state, cart: cartData };
    }
    case "decreaseQt": {
      const findProductIndex = state.cart.findIndex(
        (pro) => pro.id === action.payload
      );

      const findProduct = state.cart[findProductIndex];

      let update = {
        ...findProduct,
        quantity: findProduct.quantity - 1,
      };
      const cartData = [...state.cart];
      cartData[findProductIndex] = update;
      return { ...state, cart: cartData };
    }

    case "ADDITEM": {
      let tempId = action.payload.id - 1;
      const findProduct = state.cart.find((pro) => pro.id === tempId);
      if (findProduct) {
        // console.log("got");
        return { ...state, cart: [...state.cart] };
      }
      // console.log(action.payload.id);
      const setProduct = state.allProduct.find((pro) => pro.id === tempId);
      const updateWithQuantity = {
        ...setProduct,
        quantity: action.payload.quantity,
      };
      return { ...state, cart: [...state.cart, updateWithQuantity] };
    }

    default:
      return state;
  }
};

export default reducer;
