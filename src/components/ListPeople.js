import React, { useContext} from "react";
import { DataContext } from "./context/DataContextProvider";
import ListItem from "./ListItem";
const ListPeople = () => {
  const { state, dispatch } = useContext(DataContext);
  const fakeMembers = state.fakeItems; 
  const members = state.items;
  console.log(fakeMembers.length);
  return (
    <div className="d-flex flex-direction-column justify-content-center ">
      {members.length || fakeMembers.length ? (
        <div>
          {members.map((item) => (
            <ListItem key={item.name} data={item} />
          ))}
          {fakeMembers.map((item) => (
            <ListItem key={item.id} data={item} />
          ))}
          <button
            className="btn btn-danger ml-3 my-2 w-50 shadow-sm"
            onClick={() =>
              dispatch({ type: "CLEAR" })
            }
          >
            Clear
          </button>
        </div>
      ) : (
        <h5>please add your friends</h5>
      )}
    </div>
  );
};

export default ListPeople;
