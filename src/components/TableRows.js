import React from 'react';
export function TableRows(props) {
    return (
        <tbody>
            <tr>
                <td>{props.image}</td>
                <td>{props.name}</td>
                <td>{props.phone}</td>
                <td>{props.email}</td>
                <td>{props.location}</td>
            </tr>
        </tbody>
    );
}
