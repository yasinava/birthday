import React, { createContext, useReducer } from "react";

const initialState = {
  items: [],
  fakeItems:[ {
    id: 1,
    name: 'Bertie Yates',
    age: 29,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
  },
  {
    id: 2,
    name: 'Hester Hogan',
    age: 32,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg',
  },
  {
    id: 3,
    name: 'Larry Little',
    age: 36,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
  },
  {
    id: 4,
    name: 'Sean Walsh',
    age: 34,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
  },
  {
    id: 5,
    name: 'Lola Gardner',
    age: 29,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
  },]
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADDMEMBERS":
      if (!state.items.find((item) => item.name === action.payload.name)) {
        state.items.push({
          ...action.payload,
        });
      }else{
        alert("change your name")
      }
      return {
        ...state,
        items: [...state.items],
      };
    case "REMOVEMEMBERS":
      const newItem = state.items.filter(
        (item) => item.name !== action.payload.name
      );
      const newFakeItem = state.fakeItems.filter(item=> item.id !== action.payload.id)
      return {
        ...state,
        items: [...newItem],
        fakeItems:[...newFakeItem],
      };
      case "CLEAR":
        return{
            items:[],
            fakeItems:[]
        }
    default:
      return state;
  }
};

export const DataContext = createContext();
const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
