"use client";
import React, { useState } from 'react';
import Header from "@/Components/Header"
import Footer from "@/Components/Footer"

const Page = () => {
  //useState lay iniitilize garxa
  const [name, setName] = useState("Abhinav");

  // Function button click handle gerna
  const handleChangeName = () => {
    setName("Marcus");
  };

  return (
    <>
    <Header/>
      <h1 className="font-bold text-red-500">I am called {name}.</h1>
      <button 
        onClick={handleChangeName} 
        className="mt-4 p-2 bg-blue-500 text-white rounded">
        Change Name
      </button>
    </>
  );
};

export default Page;
