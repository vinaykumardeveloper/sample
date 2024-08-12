import React,{ useState } from "react";
import { useDispatch } from "react-redux";
import { setNumbers } from "../redux/actions";


const NumberInputs = ({onSubmit}) =>{
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(setNumbers(parseInt(from), parseInt(to)));
      onSubmit();
    }

    return(
        <form onSubmit={handleSubmit}>
         <label>
             From:
         </label>
         <input type="number" value={from} onChange={(e) => setFrom(e.target.value)}/>
         <label>
             To:
         </label>
         <input type="number" value={to} onChange={(e) => setTo(e.target.value)} />
         <button type="submit">Submit</button>
        </form>

     )
} 
export default NumberInputs;
