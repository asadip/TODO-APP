import React, { useState } from 'react'

const TodoInput = (p) => {
    const [inputText, setInputText] = useState('')
    console.log("inputText",inputText)

    return (
        <>
            <div className="flex justify-center items-center gap-4">
                <input type="text"
                    placeholder='Enter your text'
                    value={inputText}
                    className='p-1 mt-9 rounded'
                    onChange={e => {
                        setInputText(e.target.value)
                    }}
                />
                <button className='bg-red-900 text-white px-6 py-1.5 rounded  hover:bg-red-700  mt-9 ' 
                onClick={()=>{
                    p.addList(inputText)
                    setInputText("")
                }}>Add</button>
            </div>
        </>
    )
}

export default TodoInput
