import React,{useState} from 'react';

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props){
    const [title,titleChange] = useState(props.title); //assigning default value of title and holding variable and function returning from userState()
    
    // console.log("Component --->>",title); //return New Value of title
    
    const titleRender = () => {
        titleChange('New Title');
        // console.log(title); // Return Old Value of title
    };

    return (
        <div className='expense-item'>
            <ExpenseDate date={props.time}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={titleRender}>CHANGE TITLE</button>
        </div>
    
    );
}

export default ExpenseItem;