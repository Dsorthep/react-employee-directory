import React from "react";

export default function Filter(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <input
                        type="checkbox"
                        value="server"
                        onChange={({ target }) => props.onChange(target.checked)}
                    />
                    <label className="m-1">SHOW SERVER</label>
                </div>
            </div>
        </div >
    );
}