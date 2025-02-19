import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <h1 className="text-3xl font-bold text-center text-gray-800">
        Welcome to my Website!
      </h1>
      <nav className="flex justify-center space-x-6 mt-4">
        <a href="#" className="text-blue-600 hover:text-blue-800">
          Home
        </a>
        <a href="#" className="text-blue-600 hover:text-blue-800">
          About
        </a>
        <a href="#" className="text-blue-600 hover:text-blue-800">
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
