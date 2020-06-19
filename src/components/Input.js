import React from 'react';
export function Input(props) {
    return (
        <div className="container-fluid input">
            <div className="row justify-content-center">
                <div className="col-3 mt-3 align-self-center">
                    <form>
                        <input
                            onSubmit={props.handleSubmit}
                            value={props.value}
                            name="search"
                            className="form-control"
                            type="text"
                            placeholder="Search" />
                    </form>
                </div>
            </div>
        </div>
    );
}
