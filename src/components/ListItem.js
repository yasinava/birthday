import React from 'react';
import styles from "./styles/AddPeople.module.css"

const ListItem = ({data}) => {
    return (
        <div className={styles.listItems}>
            <div className='rounded-circle bg-dark overflow-hidden' style={{width:"50px"}} ><img className="img-fluid" src={data.image} alt="profilePic"/></div>
            <div className='ml-3'>
                <span className='d-block'>{data.name}</span>
                <span className='text-muted'>{data.date}{data.age}</span>
            </div>
        </div>
    );
};

export default ListItem;