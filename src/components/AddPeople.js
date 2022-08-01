import React, { useContext, useState } from "react";
import { DataContext } from "./context/DataContextProvider";
import styles from "./styles/AddPeople.module.css"






const AddPeople = () => {

  const { state, dispatch } = useContext(DataContext);

  const [data, setData] = useState({
    name: "",
  });

  const changeHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if(data.date && data.name){
      dispatch({type :"ADDMEMBERS",payload:data})
    }else{
      alert("please enter date or name")
    }
};
console.log(state);
  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler} className={styles.formContainer}>
        <div className={styles.formField}>
          <div>Name</div>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={(event) => {
              setData({ name: event.target.value });
            }}
          />
        </div>
        <div className={styles.formField}>
          <div>Date</div>
          <input type="date" name="date" onChange={changeHandler} />
        </div>
        <div className={styles.formField}>
          <div>Image</div>
          <input  type="file" name="image" onChange={changeHandler} />
        </div>
        <button className="btn btn-success px-4 mt-5 w-75" type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddPeople;
