import React from 'react';

import './Person.css';

export default function Person(props){

    return (
        <div className={`person ${props.type}`} ></div>
    );
}