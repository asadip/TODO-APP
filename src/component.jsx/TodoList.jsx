import React from 'react'
import { RiDeleteBin6Fill } from "react-icons/ri";


const TodoList = (p) => {
  return (
      <div className='flex items-center justify-center'>
        <div className=" text-white p-3 rounded-lg w-full max-w-md">
          <div className="flex items-center justify-between border border-gray-900 rounded-md px-3 py-2 ">
              {p.item}
              <RiDeleteBin6Fill className=" text-red-900 cursor-pointer hover:text-red-700 transition" 
              onClick={e => {
                  p.deleteItem(p.index)
              }} />
          </div>
      </div>
      </div>
  )
}

export default TodoList
