
import React, { useState } from 'react'

import Todos from './Todos'

const Todolist = () => {
    const [todolist, setTodolist] = useState([{
            id:  1,
            title: 'maghugas',
            status: 'ADD_ITEM'
        },
        {
            id:  2,
            title: 'maghilamos',
            status: 'COMPLETED_ITEM'
        }])
    
    // const {todo, todolist} = state
    
    const [title, setTitle] = useState('')
    // const [status, setStatus] = useState('ADD_ITEM')

    const handleOnChange = (e) => {
        const {name,value} = e.target

        setTitle(value)

        console.log(name)
        console.log(value)
    }
 
    const addedTodo = todolist.filter(todo => todo.status === 'ADD_ITEM' )
    const completedTodo = todolist.filter(todo => todo.status === 'COMPLETED_ITEM')
    // CREATE
    const createTodo = (e) => {
        e.preventDefault()
        const id = Math.floor(Math.random() * 10000) + 1
        // const newTask = {id, title}

        const newTask = {
            id: id,
            title: title,
            status: 'ADD_ITEM'
        } 

        setTodolist([...todolist, newTask])
        setTitle('')

    //     e.preventDefault(
    //     const list = todolist // current na laman na todo
    //    list.push(todo) // current + current todo input

    //     setState({todo:'', todolist: list}) 
        //papasa yung list sa todolist since yun na yung updated
        //todo:'' para ma-clear laman ng input after mag add
    }

      // DELETE
      const deleteTodo = (e, id) => {
          e.preventDefault()
          const newTodos = todolist.filter(todo => todo.id !== id )
        //   console.log(newTodos)
          setTodolist(newTodos)
        // const list = todolist // current na laman na todo
        // list.splice(id, 1) // current - current todo input

        // setState({todo:'', todolist: list}) 
    }

        //UPDATE
        const onSave = (e, id, inputValue) => {

            e.preventDefault()
            const tempTodos = [...todolist];
            const newTodos = tempTodos.map((todo) => {
                if( todo.id === id){
                    todo.title = inputValue;
                    return todo
                }
                return todo;
              })
            // newTodos[todolist.id] = inputValue;
            setTodolist(newTodos)
        }

        // const arr1 = [1,20,50,100];

        // console.log(...arr1); // 1 2 3 4
        // const arr2 = [...arr1];
        // console.log(arr2); // [1,20,50,100]


        const onCheckCompleted = (id, status) => {
            
            const tempTodos = [...todolist];
            const newTodos = tempTodos.map((todo) => {
                if(todo.id === id) {
                    todo.status = status;
                    return todo
                }
                return todo;
            })
            setTodolist(newTodos)
        }
    return(
        <div className='todolist-container'>
            <div className='todolist-wrapper'>
                <form className='todolist-form'>
                    <div className='add-item action-lbl' >ADD ITEM
                        <hr className='hr-add-item'></hr>
                            <div className='add-wrapper'>
                                <input type='text' 
                                name = 'title'
                                placeholder='Add todo list'
                                value={title} 
                                // value={todoTitle}
                                onChange={handleOnChange}
                                // onAdd={}
                                // onChange={(e) => setTodoTitle(e.target.value)}
                                />
                                <button onClick={createTodo}>ADD</button>
                            </div>
                        </div>
                    <div className='todo-main action-lbl'> TODO
                        <hr className='hr-todo'></hr>
                        {
                            // display text only todo
                            addedTodo.length > 0 ? 
                            addedTodo.map((value) => {

                                    return <Todos
                                    key={value.id}                      
                                    value={value}
                                    deleteTodo={deleteTodo}
                                    // handleOnclickEdit={handleOnclickEdit}
                                    onSave={onSave}
                                    onCheckCompleted={onCheckCompleted}
                                    />
      
                            }
                            ) 
                            : 'Nothing todo'
                        }
                    </div>
                    <div className='completed-main action-lbl'> COMPLETED
                        <hr className='hr-completed'></hr>
                            <div className='completed-row-wrapper'>
                            {
                            // display text only todo
                            completedTodo.length > 0 ? completedTodo.map((value) => {
                                    return <Todos
                                    key={value.id}                      
                                    value={value}
                                    deleteTodo={deleteTodo}
                                    // handleOnclickEdit={handleOnclickEdit}
                                    onSave={onSave}
                                    onCheckCompleted={onCheckCompleted}
                                    /> 
                                          
                            })
                            : 'Wala ka pa natatapos'  
                        }
                            </div>
                    </div>
                </form>
            </div>
            <div>
            { todolist.length ?
                                todolist.map((value) => 
                                   <p>{value.title}</p>) : <span>Nothing todo</span>}
        </div>
        </div>

    )
}

export default Todolist