import React from 'react';

export const Banner = (props) => {
    var imgStyle = {
        'height': 'auto',
        'width': '221px'
    };
    return (
        <div id="banner" className="jumbotron jumbotron-fluid bg-dark text-light my-0" >
            <div className="container text-center py-4 my-5" >
                <img style={imgStyle} src={process.env.PUBLIC_URL + '/images/avatar.jpg'} alt="..." className="border border-light rounded-circle mb-4"/>
                <h1 className="text-uppercase" > {props.info.name} </h1>
                <hr />
                <p className="w-50 mx-auto" > {props.info.summary} </p>
            </div>
        </div>
    );
}