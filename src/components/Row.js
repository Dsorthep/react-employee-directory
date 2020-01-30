import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { employees } from "../Employees";

export default function Row({ id, name, role, email }) {
    return (
        <div className="container">
            <div className="row employees">
                <div className="col-3 row-text">{ id }</div>
                <div className="col-3 row-text">{ name }</div>
                <div className="col-3 row-text">{ role }</div>
                <div className="col-3 row-text">{ email }</div>
            </div>
        </div>
    );
}