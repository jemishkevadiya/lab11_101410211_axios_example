// Import libraries like React, hooks and axios.
// Import css file
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PersonList.css";

// Create function instead class to use useState and useEffect.
export default function PersonList() {
    // Declare to store list of persons
    const [persons, setPersons] = useState([]);

    // Data fetching by using useEffect
    useEffect(() => {
        axios.get("https://randomuser.me/api/?results=10").then((res) => {
            console.log(res.data);
            setPersons(res.data.results);
        });
    }, []);

    return (
        <div>
            {/* header of page */}
            <h1 className="header">User List</h1>
            {/* Container of list */}
            <div className="list">
                {/* Iterate persons array to render each persons */}
                {persons.map((person, index) => (
                    <div className="card" key={index} >
                        <div className="card-content">
                            {/* Profile Photo */}
                            <img
                                src={person.picture.large}
                                alt={`${person.name.first} ${person.name.last}`}
                                className="profile-photo" />
                                { /* User Details */ }
                            <div className="details">
                                <h3>
                                    {person.name.title} {person.name.first} {person.name.last}
                                </h3>
                                <p>User Name: {person.login.username}</p>
                                <p>Gender: {person.gender.toUpperCase()}</p>
                                <p>Time Zone Description: {person.location.timezone.description}</p>
                                <p>Address: {`${person.location.street.number} ${person.location.street.name}, ${person.location.city}, ${person.location.state}, ${person.location.country} - ${person.location.postcode}`}</p>
                                <p>Email: {person.email}</p>
                                <p>Birth Date and Age: {new Date(person.dob.date).toLocaleString()} ({person.dob.age} years)</p>
                                <p>Register Date: {new Date(person.registered.date).toLocaleString()}</p>
                                <p>Phone: {person.phone}</p>
                                <p>Cell: {person.cell}</p>
                                { /* Details button */ }
                                <button className="details-button">Details</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};