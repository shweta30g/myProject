import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { reset } from '../redux/Action/Voting';
import { useHistory } from 'react-router-dom';
import Voting from './Voting'
import './VotingStyle.css'

function VotingParent() {
    const history = useHistory();
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.count); 
    useEffect(() => {
        return () => {
            dispatch(reset());
        }
    },[]);
    
    const voters = [
        "Sam ",
        "Tom",
        "Ram",
        "Revan",
        "Swap"
      ];
      return (
          
       <div>
        <div className="box">
            <h1>Welcome to Voting Count</h1>
            <h3>Total Count: {count}</h3>
        </div>
        
        <div style={{float:"right", margin: "-100px 30px 0 0"}}>
        <button onClick={() => {history.push("/")}}> Home</button>
        </div>
       
        {
            voters.map((vote) => {
                return <Voting name={vote} />
            }
            
            )
        }      
           

        </div>
      );
}

export default VotingParent
