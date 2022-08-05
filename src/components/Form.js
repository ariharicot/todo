import React from 'react';
import SubdirectoryArrowLeftIcon from '@mui/icons-material/SubdirectoryArrowLeft';

const Form = () => {
  return (
    <form>
        <input type="text" className='todo-input'></input>
        <button>
        <SubdirectoryArrowLeftIcon className="todo-button" type="submit" />
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