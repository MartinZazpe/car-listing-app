import React from 'react'

export const Header = () => {
    return (
        <div className="headerDiv">
            <div className="headerTitleContainer">
                <h1>Car Listing</h1>
            </div>
            <div className="navbar">
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#list">Car List</a></li>
                    <li><a href="#addForm">Add a car</a></li>
                </ul>
            </div>
        </div>
    )
}
