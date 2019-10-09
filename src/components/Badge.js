import React from 'react';

export const Badge = (props) => {
    return(
        <span className="badge badge-light text-dark shadow-sm mx-2 my-2 font-size-14" >
            <span className={props.item.logo + " mr-1"}></span> {props.item.skill} {props.item.title}
        </span>
    )
}