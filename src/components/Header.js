import React from "react";
import { Link } from 'react-router-dom';

const Header = (props) => (
    <div className="header">
        <h1 className="products-h1">{props.headerName}</h1>
        <div className="options">
            <Link to={ props.link1}>
                <button style={props.style1} onClick={props.func1}>{props.btn1}</button>
            </Link>
            <Link to={ props.link2}>
                <button style={props.style2} onClick={props.func2}>{props.btn2}</button>
            </Link>
        </div>
        
    </div>
)

export default Header