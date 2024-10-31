import { createSlice } from '@reduxjs/toolkit';

// Función para cargar los productos desde localStorage
const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('products');
    return serializedState ? JSON.parse(serializedState) : [];
  } catch (e) {
    console.warn('Error loading from localStorage', e);
    return [];
  }
};

// Función para guardar los productos en localStorage
const saveToLocalStorage = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('products', serializedState);
  } catch (e) {
    console.warn('Error saving to localStorage', e);
  }
};

const productSlice = createSlice({
  name: 'products',
  initialState: {
    // Cargamos los productos desde localStorage
    data: loadFromLocalStorage()
  },
  reducers: {
    productAdded: (state, action) => {
      const exists = state.data.find(
        product => product.id === action.payload.id
      );
      if (!exists) {
        state.data.push(action.payload);
        // Guardamos en localStorage
        saveToLocalStorage(state.data);
      }
    },
    productsLoaded: (state, action) => {
      state.data = action.payload;
      // Guardamos en localStorage
      saveToLocalStorage(state.data);
    },
    // actualizar cantidad del producto
    productUpdated: (state, action) => {
      const { id, quantity, file } = action.payload;
      const product = state.data.find(product => product.id === id);
      if (product) {
        if (quantity) product.quantity = quantity;
        if (file) product.file = file;
        // Guardamos en localStorage
        saveToLocalStorage(state.data);
      }
    },
    productRemoved: (state, action) => {
      const id = action.payload;
      state.data = state.data.filter(product => product.id !== id);
      // Guardamos en localStorage
      saveToLocalStorage(state.data);
    },
    productsCleared: state => {
      state.data = [];
      // Guardamos en localStorage
      saveToLocalStorage(state.data);
    }
  }
});

export const {
  productAdded,
  productsLoaded,
  productUpdated,
  productRemoved,
  productsCleared
} = productSlice.actions;
export default productSlice.reducer;
