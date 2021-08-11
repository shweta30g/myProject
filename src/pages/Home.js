import React from 'react'
import { useHistory } from 'react-router-dom'
import './HomeStyle.css'


function Home() {
    const history= useHistory();
    return (
        <div className= 'home'>
       <div className="image">
           <div className="text">
               <h1>Wonder Happens</h1>
               <p>“When given the choice between being right or being kind choose kind.”</p>
               <button className="btnHome" onClick={() => history.push("/aboutus")}>More!</button>
           </div>
           </div>
        </div>
    )
}

export default Home
