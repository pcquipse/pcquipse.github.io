import React from 'react';

export const Header = (props) => {
    return (
        <header>
            <nav className="navbar fixed-top navbar-light bg-light">
                <div className="navbar-nav mx-auto flex-row">
                    {props.children}
                </div>
            </nav>
        </header>
    )
}