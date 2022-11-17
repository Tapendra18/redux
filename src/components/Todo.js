import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, removeTodo } from "../actions/index"
const Todo = () => {

  const [inputData, setInputData] = useState('');
  const list = useSelector((state) => state.todoReducers.list);
  const dispatch = useDispatch();
  return (
    <>
      <div className='main-div'>
        <div className='child-div'>
          <figure>
            <figcaption>Add your List Here</figcaption>
          </figure>

          <div className='addItems'>
            <input type="text" placeholder='write Add Items' value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            <i className='fa fa-plus add-btn' onClick={() => dispatch(addTodo(inputData),
              setInputData('')
            )}></i>
          </div>
          <div className='showItems'>

            {
              list.map((elem) => {
                return (
                  <div className='eachItem' key={elem.id}>
                    <h3>{elem.data}</h3>
                    <i className='far fa-trash-alt add-btn' title='delete Item' onClick={() => dispatch(deleteTodo(elem.id))}> </i>
                  </div>
                )

              })
            }

          </div>
        </div>
      </div>
    </>
  )
}

export default Todo     