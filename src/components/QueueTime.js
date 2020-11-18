import React from 'react'

import './QueueTime.css';

export default function QueueTime(props) {
    return (
      <p className="queue-time">+ {props.nr ? props.nr: "Loading"}</p>
    );
  }