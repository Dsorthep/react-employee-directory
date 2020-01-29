import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

export default function Table(props) {
    return (
        <div className="container fluid mt-0">
            <div className="row">
                <div className="col-3">ID</div>
                <div className="col-3">NAME</div>
                <div className="col-3">ROLE</div>
                <div className="col-3">EMAIL</div>
            </div>
        </div>
    );
}