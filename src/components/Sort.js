import React from "react";

export default function Sort(props) {
    return (
        <div className="container">
            <div className="row">
                <div>SORT BY</div>
            </div>
            <div className="row">
                <div className="col-4">
                    <select className="form-control " onChange={({ target }) => props.onChange(target.value)}>
                        <option>NAME</option>
                        <option>DEPT</option>
                        <option>ID</option>
                    </select>
                </div>
            </div>
        </div >
    );
}