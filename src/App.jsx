import React, { useState } from "react"
import TodoInput from "./component.jsx/TodoInput"
import TodoList from "./component.jsx/TodoList"

function App() {
  const[listTodo, setListTodo] = useState([])

  let addList = (inputText) => {
    setListTodo([...listTodo, inputText])
  }

  //delete items
  const deleteListItem = (key)=>{
    let newListTodo = [...listTodo]
    newListTodo.splice(key, 1)
    setListTodo ([...newListTodo])
  }

  return (
    <>
    <TodoInput addList={addList}/>
    <h1 className="flex items-center justify-center mt-2 text-white font-semibold p-7 hover:text-red-700 cursor-pointer">TODO APP</h1>
    {listTodo.map((listItem,i)=>{
      return(
        <TodoList key={i} index={i} item={listItem} deleteItem={deleteListItem}/>
      )
    })}
    </>
  )
}

export default App
