import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

export default function Table(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-1">id</div>
                <div className="col-2">name</div>
                <div className="col-3">role</div>
                <div className="col-4">dept</div>
                <div className="col-5">email</div>
            </div>
        </div>
    );
}