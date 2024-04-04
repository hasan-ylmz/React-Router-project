import { NavLink } from "react-router-dom";

const HomePage = () => {
  
  
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl mb-8">Fake API User Profile Information</h1>
      <NavLink
        to="/profiles"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
      >
        Go to Profiles
      </NavLink>
    </div>
  );
};

export default HomePage;
