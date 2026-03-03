import { createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {

            //Vanilla (older) --> mu
            /*
            const newState = [...state];
            newState.items.push(action.payload);
            return newState;
            */

            //In older versions, we couldn't mutate the state directly, we had to return a new state object.
            //But with Redux Toolkit, we can directly mutate the state because it uses Immer library under the hood which takes care of immutability.
            //We have to mutate the state here
            //Returning a new state object will not work here, because we are using Immer which allows us to mutate the state directly.
            state.items.push(action.payload);
        },

        removeItem: (state, action) => {
            state.items.pop(action.payload);
        },

        clearCart: (state) => {
            //RTK - either mutate the existing state or return a new state object, both are fine. 
            state.items.length = 0; //mutating the existing state by setting the length to 0, which effectively clears the cart.
            // return { items : [] }; //returning a new state object which is an empty array, which also effectively clears the cart.
        }
    }
});

// console.log(cartSlice);

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;