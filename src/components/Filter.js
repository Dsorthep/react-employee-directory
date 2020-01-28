import React from "react";

export default function Filter(props) {
    return (
        <div className="container">
            <div className="row">
                <div>
                    <input
                        type="checkbox"
                        value="manager"
                        onChange={({ target }) => props.onChange(target.checked)}
                    />
                    <label className="m-1">SHOW SERVER</label>
                </div>
            </div>
        </div >
    );
}