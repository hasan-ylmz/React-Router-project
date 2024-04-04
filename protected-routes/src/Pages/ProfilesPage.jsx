import React, { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import axios from 'axios';
import '../index.css';

const ProfilesPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/users")
            .then(response => setUsers(response.data))
            .catch(error => console.error("Error Message ", error));
    }, []);

    return (
        <>
            {users.map((user) => (
                <NavLink
                    className={({ isActive }) => {
                        return isActive ? "text-stone-500" : ""
                    }} 
                    key={user.id}
                    to={`/profiles/${user.id}`} // Doğru parametre kullanılmalı: user.id
                >
                    Profile {user.id}
                </NavLink>
            ))}
            <Outlet />
        </>
    );
};

export default ProfilesPage;



/* 

    FAKE DATA - OLD VERSION 

  const profiles = [
        {profileId: 1,  name:"Ahmet"},
        {profileId: 2,  name:"Ayşe"},        
        {profileId: 3,  name:"Mehmet"},
    ];

Chat UI CARD 
        <div className="grid grid-cols-3 gap-4">
            {users.map((user) => (
                <div key={user.id} className="border rounded p-4">
                    <h2 className="text-xl font-semibold">{user.name}</h2>
                    <p className="text-gray-600">{user.email}</p>
                    <p className="text-gray-600">{user.phone}</p>
                    <Link to={user.website} className="text-blue-500 hover:underline">{user.website}</Link>
                </div>
            ))}
            <Outlet />
        </div>


*/