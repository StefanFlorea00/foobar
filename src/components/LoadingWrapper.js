import React from 'react'

import Person from './Person';
import QueueTime from './QueueTime';

import './LoadingWrapper.css';

export default function LoadingWrapper(props){
    
    console.log(props.people);

    return (
        <div className="full-wrapper">
            <div className="wrapper">
                <QueueTime nr={props.queueNr}></QueueTime>
                <Person type={`p${Math.floor(Math.random()*3)}`}></Person>
                <Person type={`p${Math.floor(Math.random()*3)}`}></Person>
                <Person type={`p${Math.floor(Math.random()*3)}`}></Person>
            <div className="bar">
            <h1 className="center title">{props.barName}</h1>
            </div>
            </div>
            <p className="center personnel">Available personnel: <span>{props.people ? props.people[0] : "Loading"}</span>, <span>{props.people ? props.people[1] : "Loading"}</span>, <span>{props.people ? props.people[2] : "Loading"}</span></p>
            <p className="center update">Last update: {props.loggedAt}</p>
        </div>
    );


}