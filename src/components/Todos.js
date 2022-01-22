import React, { useState } from 'react';
import styles from '../styles/app.scss';

const Todos = props => {
    const {
        // id,
        value,
        deleteTodo,
        onSave,
        onCheckCompleted
    } = props

    // value  {
        //     title: 'maghugas',
        //     status: 'ADD_ITEM'
        // }

    const [isEdit, setIsEdit] = useState(false);
    const [inputValue, setInputValue] = useState(value.title);

    const [isCompleted, setIsCompleted] = useState(value.status === "COMPLETED_ITEM" ? true : false);
    // console.log(isCheck, 'checkboxInput')

    const handleOnClickSave = (e) => {
        setIsEdit(false);
        onSave(e, value.id, inputValue);
    }

    const handleOnCheckCompleted = (e) => {
        setIsCompleted(e.target.checked);
        onCheckCompleted(value.id, e.target.checked ? "COMPLETED_ITEM" : "ADD_ITEM");
    }

    return (
        <div className='todo-row-wrapper'>
            <input type='checkbox' checked={isCompleted} onChange={handleOnCheckCompleted}/>
            {isEdit ? <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} /> : <span className={isCompleted ? 'textStrike' : ''}>{inputValue}</span>}
            {isEdit ? <button onClick={handleOnClickSave} type="button">Save</button> 
            : <button onClick={() => setIsEdit(!isEdit)} type="button">Edit</button>
            }
            <button onClick={(e) => deleteTodo(e, value.id)}>Delete</button>
        </div>
    )
}

export default Todos