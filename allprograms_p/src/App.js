import React, { useState } from "react";
import NumberButtons from './components/NumberButtons'
import './App.css';
import NumberInputs from "./components/NumberInputs";
import ResultDisplay from "./components/ResultDisplay";

function App(){
  const [selectedOperation, setSelectedOperation] = useState('');
  const [submitted, setSubmitted] = useState(false);

 const handleSelectOperation = (operation) => {
     setSelectedOperation(operation)
     setSubmitted(false);
 }

 const handleSubmit = () => {
    setSubmitted(true);
 }

  return(
    <div className="App">
    <h1>Number Operations</h1>
     <NumberButtons
       selectedOperation={selectedOperation}
       onSelectOperation={handleSelectOperation}
     />

     {selectedOperation && (
        <>
        <NumberInputs onSubmit={handleSubmit} />
         {submitted && <ResultDisplay />}
        </>
           
     )}
     
    </div>
  )

}

export default App;
