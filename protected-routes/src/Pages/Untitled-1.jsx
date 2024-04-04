import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router"
import { Link, NavLink } from "react-router-dom";
const ProfilePage = () => {
  const { id } = useParams();
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => setUser(response.data))
      .catch(error => console.log("Error Message ", error))
  }, [id])

  return (
    <>
      {/*    <h1 className="mt-10">Profile Page {params.ıd}</h1> */}
      <div className="bg-gray-800 rounded-lg p-6 shadow-md">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-white">{user.name}</h1>
          <p className="text-gray-400 mt-2">{user.username}</p>
          <p className="text-gray-400 mt-2">{user.email}</p>
          <p className="text-gray-400 mt-2">{user.phone}</p>
          <p className="text-gray-400 mt-2">{user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
        </div>
        <div>
          <NavLink
            to={user.website.startsWith('http') ? user.website : `http://${user.website}`}
            className="block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
            target="_blank"
          >
            Visit Website
          </NavLink>
          <p className="text-gray-400 mt-2">Company: {user.company.name}</p>
          <p className="text-gray-400 mt-2">Catch Phrase: {user.company.catchPhrase}</p>
          <p className="text-gray-400 mt-2">Business: {user.company.bs}</p>
        </div>
      </div>
    </div>

    </>
  )
}

export default ProfilePage