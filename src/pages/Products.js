import React, { useState } from 'react'
import './ProductStyle.css'
//import NotFound from "../components/GitComponets/NotFound";
// import { userContext } from "../Context/userContext";

function Products() {
    const [input, setInput] = useState("")


    return (
        <div className= 'products'>
        <h1>Search for Any Github user details</h1>
        <form onSubmit={(e) => e.preventDefault()} style={{width: "70%", paddingLeft: "15rem"}}> 
        <input 
            placeholder="Username"
            className="form_input"
            onChange={(e) => setInput(e.target.value)}
        />
        </form>
        </div>
    )
}

export default Products

