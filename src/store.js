import React, {createContext, useReducer} from 'react';

const initialState = { brands: [], auth: '' };
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state, action) => {
      console.log("ATYPE:" + action.type);
      console.log("APAYLOAD:" + action.payload);
    switch(action.type) { 
      case 'brandchange':
        console.log(action.payload)
        return Object.assign({}, state, {
            brands: [
              ...state.brands,
              action.payload
            ]
          })
      default:
        //throw new Error();
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }