import React from "react";

export default function Table(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="id">ID</div>
                <div className="name">NAME</div>
                <div className="role">ROLE</div>
                <div className="dept">DEPT</div>
                <div className="email">EMAIL</div>
            </div>
        </div>
    );
}