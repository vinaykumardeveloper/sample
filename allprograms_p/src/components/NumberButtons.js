import React from "react";
import { useDispatch } from "react-redux";
import { setOperation } from "../redux/actions";
import './NumberButton.css';


const NumberButtons = ({ selectedOperation, onSelectOperation}) => {
    const dispatch = useDispatch();

    const handleClick = (operation) => {
       dispatch(setOperation(operation))
       onSelectOperation(operation)
    }

    const operation = ['prime', 'palandrome', 'fibonacci', 'strong', 'armstrong'];

    return(
        <div className="NumberButtons">
            {operation.map(op => (
               (selectedOperation === '' || selectedOperation === op) && (
                <button
                key={op}
                onClick={() => handleClick(op)}
                className="selected"
                >
                 {op.charAt(0).toUpperCase() + op.slice(1)}
                </button>
               )

               )
            )}

        </div>
    )
}

export default NumberButtons;