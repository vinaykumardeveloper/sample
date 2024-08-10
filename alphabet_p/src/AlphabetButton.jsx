import React from "react";

const AlphabetButton = ({letter, onClick}) =>{
    return <button onClick={onClick}>{letter}</button>;
};

export default AlphabetButton;