import React from 'react';
import { TableRows } from './TableRows';
import API from "../api/Api"


export function Table() {


    API.getEmployees()
    .then(res => console.log(res))
    


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
                <TableRows/>
            </table>
        </div>
    );
}
