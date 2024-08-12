import React from "react"
import { useSelector } from "react-redux"
import './ResultDisplay.css';

const ResultDisplay = () => {
  const {result} = useSelector(state => state);

  return(
    <div className="ResultDisplay">
        <h1>Result:</h1>
        <div className="result-list">
        {result.map((num, index) => (
          <div key={index} className="result-item">
           {num}
           </div>
       ) )}
       </div>
    </div>
  )
}

export default ResultDisplay;