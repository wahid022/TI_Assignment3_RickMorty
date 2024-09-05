import React from "react";

export default function Search({setSearchState,setCurrentPage}) {


  //Here onChanging anyvalue the setSearchState() function of mapp.js is called and it actually update the state there 
  // and then Api is called using useEffect() again 


  // setCurrentPage() is send here to update the current page so that searched items starts from the first page itself ..
  return (
    <div className="row align-items-center mb-4">
      <form className="d-flex">
        <input
          className="form-control w-50 mx-1"
          type="text"
          placeholder="Search"
          aria-label="Search"

          onChange={(e)=>{
            setSearchState(e.target.value)
            console.log(e.target.value);
            setCurrentPage(1);
          }}
            
        />
        <button className="btn btn-outline-success" type="submit" onClick={(e)=>{e.preventDefault()}}>
          Search
        </button>
      </form>
    </div>
    // </div>
  );
}
