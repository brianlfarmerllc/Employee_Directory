import React from 'react';

function Trowe (props) {
    return (
        <tr key={props.id}>
        <td><img alt={props.name} className="img-fluid" src={props.image} /></td>
        <td>{props.name}</td>
        <td>{props.phone}</td>
        <td>{props.email}</td>
        <td>{props.location}</td>
        </tr>
    )
}

export default Trowe