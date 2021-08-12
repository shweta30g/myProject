import React, { useEffect } from 'react'
import './ProductStyle.css'
import { useDispatch, useSelector } from "react-redux";
import { getUser } from '../redux/Action/SagaActionReducer';
//import NotFound from "../components/GitComponets/NotFound";
// import { userContext } from "../Context/userContext";

function Products() {
    // const [input, setInput] = useState("")
  
    const user = useSelector((state) => state.user.user); 
    console.log("hello", user.user)
    const dispatch = useDispatch();
    useEffect(() => {
        return () => {
            dispatch(getUser())
        }
    }, [dispatch])


    return (
        <div className= 'products'>
        <h1>Search for Any Github user details</h1>
        {user && <h1>hello {user.id}</h1>}
     {/* <div className="container">
     
            <table>
                <tr>
                    <th>Name</th>
                    <th>Id</th>
                    <th>URL</th>
                </tr>
                {user && 
                    user.map((user) => {
                        console.log("user deatils", user)
                        return(
                            <tr>
                                <td>
                                     {user.name} 
                                </td>
                                <td>
                                    {user.id}
                                </td>
                                <td>
                                    {user.url}
                                </td>
                            </tr>
                        )
                    })
                }

            </table>
            </div> */}
    </div>
    )
}

export default Products

 // eslint-disable-next-line no-lone-blocks
 {/*<form onSubmit={(e) => e.preventDefault()} style={{width: "70%", paddingLeft: "15rem"}}> 
        <input 
            placeholder="Username"
            className="form_input"
            onChange={(e) => setInput(e.target.value)}
        />
    </form>*/}