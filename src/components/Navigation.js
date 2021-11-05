import React from 'react';
import './Navigation.css';
import {Link} from 'react-router-dom';

function Navigation() {
    return ( //a href가 아닌 Link to로 사용한다. f12 보면 a href로 되어있다.
        <div className="nav">
            <Link to="#">Home</Link>
            <Link to="#">About</Link>
        </div>
    )
}

export default Navigation;
