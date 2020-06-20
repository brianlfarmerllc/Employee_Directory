import React from 'react';

function Table(props) {
    let search = props.search
    let results = props.results
    let filteredBy = results.filter(employee => employee.name.first === search)
    console.log(filteredBy)

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
                <tbody>
                    {props.results.map(result => (
                        <tr>
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
