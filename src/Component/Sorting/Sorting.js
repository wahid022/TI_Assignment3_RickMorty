import React from "react";

export default function Sorting({ filteredDataArray, setDataArray }) {
  const handleAscending = () => {


    // Here copy banta hai filteredDataArray ka and comparison is done 
    //[{ name: "Apple" },{ name: "Mango" },{ name: "Zebra" }] then ; 
    // For Ascending Order -->>  "Zebra" < "Apple" is false, so "Apple" comes before ; "Zebra" < "Mango" is false, so "Mango" comes before; "Apple" < "Mango" is true, so "Apple" comes before
    
    const sortedArray = [...filteredDataArray].sort((a, b) => {
      return a.name < b.name ? -1 : 1; // Simple string comparison
    });

    // Updating  the state with the sorted array ...
    setDataArray(sortedArray); 
    // setCurrentPage(1); 
  };

  const handleDescending = () => {
    // Create a copy of the array and sort it in descending order
    const sortedArray = [...filteredDataArray].sort((a, b) => {
      return a.name > b.name ? -1 : 1; // Simple string comparison
    });

    // Update the state with the sorted array
    setDataArray(sortedArray); 
    // setCurrentPage(1); // Reset to the first page after sorting
  };

  return (
    <div className="container">
      <div className="btn-group">
        <button
          type="button"
          className="btn btn-success dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Sort By
        </button>
        <ul className="dropdown-menu">
          <li>
            <button className="dropdown-item" onClick={handleAscending}>
              Ascending
            </button>
          </li>
          <li>
            <button className="dropdown-item" onClick={handleDescending}>
              Descending
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
