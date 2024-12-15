import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';
import Todoitems from './Todoitems';

const Todo = () => {
  return (
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-2xl'>


        {/* title */}
        <div className='flex items-center mt-7 gap-2'>
           
            <FontAwesomeIcon icon ={faClipboardList} size='lg' />
            <h1 className='text-3xl font-semibold'>To-Do List</h1>  

        </div>



        {/* input */}
    <div className='flex items-center my-7 bg-gray-200 rounded-full'>

        <input className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' type="text" placeholder='Add your task' />
        <button className='border-none rounded-full bg-orange-600 w-32 h-14 test-white text-lg font-medium cursor-pointer'>ADD +</button>

   </div>
        


         {/* todo list */}
         <div>
            <Todoitems/>
            <Todoitems/>
         </div>
    </div>
  )
}

export default Todo