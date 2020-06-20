import React from 'react';

function Input(props) {
    return (
        <div className="container-fluid input">
            <div className="row justify-content-center">
                <div className="col-4 mt-3 align-self-center">
                    <form className="form-inline">
                        <input
                            onChange={props.handleChange}
                            value={props.search}
                            name="search"
                            className="form-control"
                            type="text"
                            placeholder="Search Directory" />
                        <button
                            onClick={props.handleSubmit}
                            style={{
                                backgroundColor: "#ff2c56",
                                height: "3em", fontWeight: 900
                            }}
                            className="btn btn-dark ml-5"
                            type="submit">Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Input