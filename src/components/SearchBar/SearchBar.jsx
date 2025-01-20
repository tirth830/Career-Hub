import { Input, Button } from "reactstrap";
import { IoLocationOutline, IoSearchSharp } from "react-icons/io5";
import React, { useState } from 'react';

export default function Searchbar({ onSearch }) {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    onSearch(title, location);
  };

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-1 mb-8 gap-5 overflow-x-hidden">
      <div className="relative flex items-center">
        <IoSearchSharp className="absolute ml-2 p-1 w-7 h-7 rounded-md text-blue-900 bg-[#e7f3ff]" />
        <Input
          type="search"
          placeholder="Search..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="pl-11 w-full py-2 rounded-md border border-[#e7f3ff] focus:border-blue-900 outline-none"
        />
      </div>
      <div className="relative flex items-center">
        <IoLocationOutline className="absolute ml-2 p-1 w-7 h-7 rounded-md text-blue-900 bg-[#e7f3ff]" />
        <Input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="pl-11 w-full py-2 rounded-md border border-[#e7f3ff] focus:border-blue-900 outline-none"
        />
      </div>
      <Button onClick={handleSearch} className="bg-blue-900 hover:shadow-md  hover:shadow-blue-900 duration-200 rounded-lg text-white lg:w-60 w-[365px] lg:h-10 h-9">
        Search
      </Button>
    </div>
  );
}
