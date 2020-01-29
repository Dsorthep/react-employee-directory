import React from "react";
import "../App.css";

export default function Filter(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <input
                        type="checkbox"
                        value="Server"
                        onChange={({ target }) => props.onChange(target.checked)}
                    />
                    <label className="m-1">SHOW SERVERS</label>
                </div>
            </div>
        </div >
    );
}