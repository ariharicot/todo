import React from 'react';

const Form = () => {
  return (
    <form>
        <input type="text" className='todo-input'></input>
        <button className="todo-button" type="submit">
            <i class="fa fa-plus square"></i>
       </button>
       <div className="select">
        <select name="todos" className="filter-todo">
            <option value="all">Tout</option>
            <option value="all">Finis</option>
            <option value="all">En cours</option>
        </select>
       </div>
    </form>
  )
}

export default Form