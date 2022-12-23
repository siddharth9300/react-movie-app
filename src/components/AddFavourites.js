import React from "react";
import { Link } from "react-router-dom";
const AddFavourites = () => {
  return (
    <div>
      <Link className="text-lg max-md:text-sm add-fav justify-center flex text-red-600 font-bold">
        {/* Add to Favourites */}

        <svg
          className="my-auto ml-4 flex"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="red"
          class="bi bi-heart-fill"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
          />
        </svg>
      </Link>
    </div>
  );
};

export default AddFavourites;
