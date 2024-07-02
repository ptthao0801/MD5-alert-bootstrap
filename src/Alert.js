import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import React, { Component } from 'react';
function Alert(props) {
    return (
        <div class="alert alert-warning" role="alert">
            {props.text }
        </div>
    )
}
export default Alert;