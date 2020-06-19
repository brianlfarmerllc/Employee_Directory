import React from 'react';
import { TableRows } from './TableRows';
import API from "../api/Api"


export function Table() {
    let employees;

    API.getEmployees().then(res => {
        employees = res.results
    })
    console.log(employees)
    
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
               
                <TableRows
                // image={employees[0].picture.thumbnail}
                // name={employees[0].name.first}
                // phone={employees[0].phone}
                // email={employees[0].email}
                // location={employees[0].location.postcode}
                />
            </table>
        </div>
    );
}
