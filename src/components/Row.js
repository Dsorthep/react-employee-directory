import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { employees } from "../Employees";

export default function Row({ id, name, role, email }) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-3">{ employees.id }</div>
                <div className="col-3">{ employees.name }</div>
                <div className="col-3">{ employees.role }</div>
                <div className="col-3">{ employees.email }</div>
            </div>
        </div>
    );
}