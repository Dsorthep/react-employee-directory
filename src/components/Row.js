import React from "react";

export default function Row() {
    return (
        <div className="container">
            <div className="row">
                <div className="row-id">{id}</div>
                <div className="row-name">{name}</div>
                <div className="row-role">{role}</div>
                <div className="row-dept">{department}</div>
                <div className="row-email">{email}</div>
            </div>
        </div>
    );
}