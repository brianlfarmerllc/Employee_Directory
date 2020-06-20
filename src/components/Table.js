import React from 'react';

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
                        <th className="name" scope="col">Name<i className="arrow down"></i></th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">Location</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredBy.map(result => (
                        <tr key={result.id.value}>
                            <td><img alt={result.name} className="img-fluid" src={result.picture.thumbnail} /></td>
                            <td>{result.name.first + " " + result.name.last}</td>
                            <td>{result.phone}</td>
                            <td>{result.email}</td>
                            <td>{result.location.city + ", " + result.location.state}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
