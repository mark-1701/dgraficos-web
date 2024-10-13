import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'products',
  initialState: {
    data: []
  },
  reducers: {
    productAdded: (state, action) => {
      // solo se agrega cuando el id no esta registrado
      const exists = state.data.find(
        product => product.id === action.payload.id
      );
      if (!exists) {
        state.data.push(action.payload);
      }
    },
    productsLoaded: (state, action) => {
      // ignora los comentarios
      // payload es el valor de de api que estamos solicitando
      // state.data hace referencia a data[]
      state.data = action.payload;
    },
    productUpdated: (state, action) => {
      const { id, name } = action.payload;
      const product = state.data.find(product => product.id === id);
      if (product) product.name = name;
    },
    productRemoved: (state, action) => {
      const id = action.payload;
      state.data = state.data.filter(producto => producto.id !== id);
    }
  }
});

export const { productAdded, productsLoaded, productUpdated, productRemoved } =
  productSlice.actions;
export default productSlice.reducer;
