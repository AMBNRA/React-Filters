import React from 'react';
import ExpeneseDate from './ExpenseDate';
import './ExpeneseItem.css'

const ExpeneseItem = (props) =>{
    return(
        <div className="expense-item">
            <ExpeneseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>{props.amount}</div>
            </div>
        </div>
    )
}
export default ExpeneseItem;