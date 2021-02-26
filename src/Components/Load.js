import React, {Component} from 'react';
import {Link} from "react-router-dom";

const Load = (props) => {
        return(
            <div className='container-load'>
            <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            </div>
        )
}

export default Load;