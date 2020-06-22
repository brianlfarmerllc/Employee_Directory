import React from 'react';

function Input(props) {
    return (
        <div className="container-fluid input">
            <div className="row justify-content-center">
                <form className="form-inline">
                    <div className="col-12 mt-3">
                        <input
                            onChange={props.handleChange}
                            value={props.search}
                            name="search"
                            className="form-control"
                            type="text"
                            placeholder="Search Directory" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Input