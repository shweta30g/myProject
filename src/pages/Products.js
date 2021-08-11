import React, { useState,useEffect } from 'react'
import './ProductStyle.css'
import { useDispatch, useSelector } from "react-redux";
import { getUser } from '../redux/Action/SagaActionReducer';
//import NotFound from "../components/GitComponets/NotFound";
// import { userContext } from "../Context/userContext";

function Products() {
    const [input, setInput] = useState("")
  
    const user = useSelector((state) => state.user.user); 
    console.log(user)
    const dispatch = useDispatch();
    useEffect(() => {
        return () => {
            dispatch(getUser())
        }
    }, [dispatch])


    return (
        <div className= 'products'>
        <h1>Search for Any Github user details</h1>
        {user && <h1>hello, {user.user}</h1>}
        <form onSubmit={(e) => e.preventDefault()} style={{width: "70%", paddingLeft: "15rem"}}> 
        <input 
            placeholder="Username"
            className="form_input"
            onChange={(e) => setInput(e.target.value)}
        />
        </form>
        <div className="container">
            <table>
                <tr>
                    <th>Name</th>
                    <th>Id</th>
                    <th>URL</th>
                </tr>
            </table>
        </div>
        </div>
    )
}

export default Products

