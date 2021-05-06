import React, { useState } from 'react'
import Delete from './Delete'

function Todolist(){

    const [Inputlist , setInputlist] = useState("")
    const [DisplayData, setDisplayData] = useState([])

    const handleinput = (event) => {
        setInputlist(event.target.value)
    }

    const handlesubmit = () => {
        setDisplayData((old_data) => {
            return([...old_data, Inputlist])
        })  
        setInputlist("");

    }

    const handledelete = (id) => {
        setDisplayData((old_data)=>{
            return old_data.filter((arrele, index)=> {
                return(index !== id)
            })
        })
    }

    return(
        <div className="main_div">
             <div className="sub_div">

                     <header>ToDo List</header>

                     <input type="text" name="additem" id="additem" placeholder="Add item" 
                        value={Inputlist}
                        onChange={handleinput}
                     />
                     <button onClick={handlesubmit} >+</button>

                    <ul>
                        {
                            DisplayData.map((items,index) => {
                                return(<li>
                                     <Delete
                                     key = {index}
                                     id = {index}
                                     text = {items}
                                     onSelect = {handledelete}
                                     />
                                    </li>)
                            })
                        }
                    </ul>
             </div>
        </div>
    )
}

export default Todolist