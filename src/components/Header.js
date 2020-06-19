import React from 'react';
export function Header() {
    return (
        <header className="container-fluid header">
            <div className="row">
                <div className="col-12 mt-3">
                    <h1>Employee Directory</h1>
                    <p>Click on carrots to filter by heading or use the search box to narrow your results</p>
                </div>
            </div>
        </header>
    );
}
