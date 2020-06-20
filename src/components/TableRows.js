/* eslint-disable no-sequences */
import React from 'react';
export function TableRows(props) {
    return (
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
    );
}
