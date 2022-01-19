
import React, { useState } from 'react'

import Todos from './Todos'

const Todolist = () => {
    const [state, setState] = useState({
        todo: '',
        todolist: [{
            id:  1,
            title: 'maghugas',
            status: 'ADD_ITEM'
        },
        {
            id:  2,
            title: 'maghilamos',
            status: 'COMPLETED_ITEM'
        },
        {
            id:  3,
            title: 'Magtooth brush',
            status: 'DELETED_ITEM'
        }]
    })

    
    const {todo, todolist} = state

    const handleOnChange = (e) => {
        const {name,value} = e.target

        setState({...state, [name]: value})
    }
 
    // CREATE
    const createTodo = (e) => {
        e.preventDefault()
        const list = todolist // current na laman na todo
       list.push(todo) // current + current todo input

        setState({todo:'', todolist: list}) 
        //papasa yung list sa todolist since yun na yung updated
        //todo:'' para ma-clear laman ng input after mag add
    }

      // DELETE
      const deleteTodo = (id) => {
        // const list = todolist // current na laman na todo
        // list.splice(id, 1) // current - current todo input

        // setState({todo:'', todolist: list}) 
    }

        //UPDATE
        const onSave = (id, inputValue) => {
            // const newTodos = [...state.todolist];
            // newTodos[index] = inputValue;
            // setState({...state, todolist: [...newTodos]})
        }

        // const arr1 = [1,20,50,100];

        // console.log(...arr1); // 1 2 3 4
        // const arr2 = [...arr1];
        // console.log(arr2); // [1,20,50,100]


        const onCheckCompleted = (id, status) => {
            
            const tempTodos = [...state.todolist];
            const newTodos = tempTodos.map((todo) => {
                if(todo.id === id) {
                    todo.status = status;
                    return todo
                }
                return todo;
            })
            setState({...state, todolist: newTodos})
        }
    return(
        <div className='todolist-container'>
            <div className='todolist-wrapper'>
                <form className='todolist-form'>
                    <div className='add-item action-lbl' >ADD ITEM
                        <hr className='hr-add-item'></hr>
                            <div className='add-wrapper'>
                                <input type='text' 
                                name = 'todo'
                                placeholder='Add todo list'
                                value={todo}
                                onChange={handleOnChange}/>
                                <button onClick={createTodo}>ADD</button>
                            </div>
                        </div>
                    <div className='todo-main action-lbl'> TODO
                        <hr className='hr-todo'></hr>
                        {
                            // display text only todo
                            todolist.length && todolist.map((value) => {

                                if(value.status === "ADD_ITEM") {
                                    return <Todos
                                    key={value.id}                      
                                    value={value}
                                    deleteTodo={deleteTodo}
                                    // handleOnclickEdit={handleOnclickEdit}
                                    onSave={onSave}
                                    onCheckCompleted={onCheckCompleted}
                                    />
                                }   
                                          
                            })  
                        }
                    </div>
                    <div className='completed-main action-lbl'> COMPLETED
                        <hr className='hr-completed'></hr>
                            <div className='completed-row-wrapper'>
                            {
                            // display text only todo
                            todolist.length && todolist.map((value) => {

                                if(value.status === "COMPLETED_ITEM") {
                                    return <Todos
                                    key={value.id}                      
                                    value={value}
                                    deleteTodo={deleteTodo}
                                    // handleOnclickEdit={handleOnclickEdit}
                                    onSave={onSave}
                                    onCheckCompleted={onCheckCompleted}
                                    />
                                }   
                                          
                            })  
                        }
                            </div>
                    </div>
                </form>
            </div>
            <div>
            {/* { todolist.length ?
                                todolist.map((value, index) => 
                                   <p>{} {index}</p>) : <span>Nothing todo</span>} */}
        </div>
        </div>

    )
}

export default Todolist