import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link, NavLink } from "react-router-dom";

const ProfilePage = () => {
  const { id } = useParams();
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => setUser(response.data))
      .catch((error) => console.log("Error Message ", error));
  }, [id]);

  return (
    <div id="profileInfoPage" className="flex justify-center items-center rounded-lg mt-10 min-h-screen bg-gradient-to-br from-stone-900 to-violet-900">
      {user ? (
        <div className=" bg-white rounded-lg p-8 shadow-md max-w-xl w-full relative">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">{user.name}</h1>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-gray-600 mb-2">Username: {user.username}</p>
              <p className="text-gray-600 mb-2">Email: {user.email}</p>
              <p className="text-gray-600 mb-2">Phone: {user.phone}</p>
              <p className="text-gray-600 mb-2">Address: {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
            </div>
            <div>
              <p className="text-gray-600 mb-2">Business: {user.company.name}</p>
              <p className="text-gray-600 mb-2">Catch Phrase: {user.company.catchPhrase}</p>
              <p className="text-gray-600 mb-2">Business: {user.company.bs}</p>
            </div>
          </div>
          {/* Website button */}
          <div className="text-center mt-5 ">
            <NavLink
              to={user.website.startsWith('http') ? user.website : `http://${user.website}`}
              className="block bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
              target="_blank"
            >
              Visit Website
            </NavLink>
          </div>
          {/* Previous ve Next User Butonları */}
          <div className="mt-8 grid grid-cols-2 gap-8 ">
            <div className="flex justify-start ">
              {/* Önceki kullanıcı linki */}
              {parseInt(id) !== 1 && (
                <Link className="text-black text-xl" to={`/profiles/${parseInt(id) - 1}`}>
                  Previous User  ({parseInt(id) - 1})
                </Link>
              )}
            </div>
            <div className="flex justify-end">
              {/* Sonraki kullanıcı linki */}
              {parseInt(id) !== 10 && (
                <Link className="text-black text-xl" to={`/profiles/${parseInt(id) + 1}`}>
                  Next User ({parseInt(id) + 1})
                </Link>
              )}
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProfilePage;
