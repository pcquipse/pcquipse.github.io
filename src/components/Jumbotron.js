import React from 'react';

export const Jumbotron = (props) => {
    return(
        <div id={props.id} className={"jumbotron jumbotron-fluid my-0 " +  props.className} >
            <div className="container text-center py-2" >
                {props.children}
            </div>
        </div>
    )
}