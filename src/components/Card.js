import React from 'react';

export const Card = (props) => {
    return (
        <div className={"card shadow-sm " + props.className}>
            <img src={props.item.image} className="card-img-top img-fluid" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.item.title}</h5>
                <p className="card-text">{props.item.description}</p>
            </div>
        </div>
    );
}