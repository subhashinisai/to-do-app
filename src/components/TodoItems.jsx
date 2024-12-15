import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
const Todoitems = ({text , id , isComplete , deleteTodo}) => {
  return (
    <div className='flex items-center my-3 gap-2' >

        <div className='flex flex-1 items-center cursor-pointer'>
        <FontAwesomeIcon icon={faSquareCheck} size='lg' className='cursor-pointer text-orange-600' />
        <p className='text-slate-700 ml-4 text-[17px]'>{text}</p>

        </div>
       <FontAwesomeIcon icon={faTrash} className='cursor-pointer text-orange-600' onClick={()=>{deleteTodo(id)}}/>
    </div>
  )
}

export default Todoitems