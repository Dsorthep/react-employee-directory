import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

export default function Table(props) {
    return (
        <div className="container fluid mt-0">
            <div className="row">
                <div className="col-3 table-text">ID</div>
                <div className="col-3 table-text">NAME</div>
                <div className="col-3 table-text">ROLE</div>
                <div className="col-3 table-text">EMAIL</div>
            </div>
        </div>
    );
}