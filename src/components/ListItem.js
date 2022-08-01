import React,{useContext} from 'react';
import { DataContext } from './context/DataContextProvider';
import styles from "./styles/AddPeople.module.css"


const ListItem = ({data}) => {
    const {state,dispatch}=useContext(DataContext);
    return (
        <div className={styles.listItems}>
            <div className={styles.listItems}>
            <div className='rounded-circle bg-dark overflow-hidden' style={{width:"50px"}} ><img className="img-fluid" src={data.image} alt="profilePic"/></div>
            <div className='ml-3'>
                <span className='d-block'>{data.name}</span>
                <span className='text-muted'>{data.date}{data.age}</span>
            </div>
            </div>
            <button type='button' className='close text-align-right' 
            onClick={()=>{dispatch({type:"REMOVEMEMBERS" ,payload:data})}}
            >
                <span>&times;</span>
            </button>
        </div>
    );
};

export default ListItem;