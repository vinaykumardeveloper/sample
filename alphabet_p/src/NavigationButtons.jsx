import React from "react";

const NavigationButtons = ({onNext, onPrev}) => {
    return(
        <div>
        <button onClick={onPrev}>Previous</button>
        <button onClick={onNext}>Next</button>
        </div>
    );
};
export default NavigationButtons;
