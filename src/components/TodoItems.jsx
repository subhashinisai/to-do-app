import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-solid-svg-icons';
const Todoitems = ({text , id , isComplete , deleteTodo , toggle}) => {
  return (
    <div className='flex items-center my-3 gap-2' >

        <div onClick={()=>{toggle(id)}} className='flex flex-1 items-center cursor-pointer'>
        <FontAwesomeIcon icon={isComplete ? faSquareCheck : faSquare} size='lg' className='cursor-pointer text-orange-600' />
        <p className={`text-slate-700 ml-4 text-[17px] decoration-slate-500
            ${isComplete?"line-through":""}`}>{text}</p>

        </div>
       <FontAwesomeIcon icon={faTrash} className='cursor-pointer text-orange-600' onClick={()=>{deleteTodo(id)}}/>
    </div>
  )
}

export default Todoitems


