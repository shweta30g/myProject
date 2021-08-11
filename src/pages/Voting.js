import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { decrement, increment } from "../redux/Action/Voting";
import './VotingStyle.css'

const Voting = (props) => {
 

  const { name } = props;
  const dispatch = useDispatch(); //dispatch allows us to call any number of function frm reducer store.
  // const count = useSelector((state) => state.voting.count); //(state+Counter+instialstate)

  const [votes, setVotes] = useState(0);

  const handleIncrement = (e) => {
    if(votes >= 20){
      alert('Hello '+ name + ' The count is limited to only 20.');
    } else {
      dispatch(increment());
      setVotes(prevVotes=> prevVotes + 1);
    }

  };
  const handleDecrement = () => {
    if(votes <= 0){
      console.log('error')
      alert('Hello '+ name + ' Please increment the count');
    }else{
      dispatch(decrement());
      setVotes(prevVotes=> prevVotes - 1);
    }
    
  };

  
  return (

    <div className="main">
    <div className="container">
    <div className="box1">
    <div className="voterBox">
    <h2> {name}</h2>
    <h3> {`Local Count: ${votes}`} </h3>
    </div>
      <div className="btn">
        <button onClick={handleIncrement}> Increment </button>
        <button onClick={handleDecrement}> Decrement </button> 
      </div>
    </div>
  </div>
    </div>
    
  );
};


export default Voting;
