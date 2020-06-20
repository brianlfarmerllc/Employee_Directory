import React, { Component } from 'react';
import { TableRows } from './TableRows';
import API from "../api/Api"


class Table extends Component {
    state = {
        result: [],
    };

    componentDidMount() {
        this.searchEmployees();
    }

    searchEmployees = () => {
        API.getEmployees()
            .then(res => this.setState({ result: res.results }))
            .catch(err => console.log(err));
    };
    

    render() {
        return (
            <div className="container">
                <table className="table mt-4">
                    <thead>
                        <tr>
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Email</th>
                            <th scope="col">Location</th>
                        </tr>
                    </thead>
                    <TableRows results={this.state.result}/>
                </table>
            </div>
        );
    }
}

export default Table;
