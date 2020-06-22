import React from 'react';
import Trowe from './Trowe'

function Table(props) {
    let search = props.search
    let results = props.results
    let filteredBy = results.filter(employee => {
        employee.fullname = `${employee.name.first} ${employee.name.last}`
        employee.citystate = `${employee.location.city}, ${employee.location.state}`
        return JSON.stringify(employee).includes(search)})
    

    return (
        <div className="container">
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Name
                        <i onClick={props.sortName} 
                        className="arrow down"></i>
                        </th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email
                        <i onClick={props.sortName} 
                        className="arrow down"></i>
                        </th>
                        <th scope="col">Location
                        <i onClick={props.sortLocation} 
                        className="arrow down"></i>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {filteredBy.map(result => (
                        <Trowe
                        key={result.id.value}
                        name={result.name.first + " " + result.name.last}
                        image={result.picture.thumbnail}
                        phone={result.phone}
                        email={result.email}
                        location={result.location.city + ", " + result.location.state}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
