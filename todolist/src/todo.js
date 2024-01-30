import React, { useState } from "react"
import "./todo.css"
function Todo(){

    const[item, setitem]=useState("")
    const[itemlist, setitemlist]=useState([])
    function additem(event){
        event.preventDefault(); 
        setitemlist([...itemlist, item])
    }

    function del(index){
        var duplicatearray=[...itemlist]
        duplicatearray.splice(index, 1)
        setitemlist(duplicatearray)
    }
    const itemdisplay=itemlist.map((object, index)=>{
        return <div id="disp">
            <h1 id="item">{index+1} {object}</h1>
            {/* //to ensure items listed starts from one use index+1// */}
            <button id="btn" onClick={del}>Delete</button>
        </div>
    })


    return<div className="body">
            <h1>React ToDo List</h1>
            <div>
            <input type="text" placeholder="items" className="input" value={item} onChange={(e)=>{setitem(e.target.value)}}/>
            <button className="btn" onClick={additem}>ADD TASK</button>
            </div>
        {itemdisplay}
    </div>
   
}
export default Todo