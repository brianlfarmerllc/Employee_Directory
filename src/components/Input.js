import React from 'react';

function Input(props) {
    return (
        <div className="container-fluid input">
            <div className="row justify-content-center">
                <div className="col mt-3">
                    <form className="form-inline">
                        <input
                            onChange={props.handleChange}
                            value={props.search}
                            name="search"
                            className="form-control"
                            type="text"
                            placeholder="Search Directory" />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Input