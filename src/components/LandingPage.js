import React, { useState } from 'react';
import AddPeople from './AddPeople';
import ListPeople from './ListPeople';
import styles from "./styles/LandingPage.module.css"
const LandingPage = () => {
    const [click , setClick]=useState({
        show:true
    })
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    return (
        <div className={styles.container}>
            <div className='p-3 bg-light rounded-top shadow-sm'><h5 className='font-weight-light'>{year}-{month}-{day}</h5></div>
            <div className='overflow-auto'>
                {click.show ? <ListPeople/>:<AddPeople/>}
            </div>
            <div className={styles.buttonContainer}>
                <button className='btn btn-secondary shadow' onClick={()=>{setClick({show:false})}}>Add People</button>
                <button className='btn btn-secondary shadow' onClick={()=>{setClick({show:true})}}>View All</button>
            </div>
        </div>
    );
};

export default LandingPage;