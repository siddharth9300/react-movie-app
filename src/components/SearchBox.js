import React from "react";

const SearchBox = (props) => {
  
  return (
    <>
      <div className="fixed z-10 h-0 flex max-md:flex-row flex-row-reverse w-full max-md:mt-12 ">
        <div className="relative w-96 z-20 max-md:w-72  p-5 md:mr-24 md:flex-row">
          <div className="flex justify-between overflow-hidden rounded-md bg-white shadow shadow-black/20">
            <input
              type="text"
              className="block w-full flex-1 py-2 px-3 rounded focus:outline-none bg-gray-200 hover:bg-gray-300"
              value={props.value}
              onChange={(event) => props.setSearchValue(event.target.value)}
              
              placeholder="Search movie.."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBox;
