import React from 'react';
import "../Styles/Card.css";


export default function Card(props) {
    return (
        <div className="pg-cntr">
            <div className="card border-success mb-3" >
                <div className={`card-header border-success ${props.status === 'Completed' ? 'completed' : ''}`}>
                    {props.status}
                </div>
                <div className="card-body text-success">
                    <h5 className="card-title">
                        <u>{props.drName}</u>
                    </h5>
                    <p className="card-text">
                        {props.details}
                    </p>
                </div>
                <div className="card-footer border-success">
                    {props.date}
                </div>
            </div>
        </div>
    )
}
