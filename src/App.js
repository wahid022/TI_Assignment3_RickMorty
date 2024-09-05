import "./App.css";
import { useEffect, useState } from "react";
import Card from "./Component/Cards/Card";
import Filter from "./Component/Filter/Filter";
import Search from "./Component/Search/Search";
import Sorting from "./Component/Sorting/Sorting";
import Pagination from "./Component/Pagination/Pagination";

function App() {
  const [dataArray, setDataArray] = useState([]);
  const [pageInfo, setPageInfo] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [searchState, setSearchState] = useState("");

  //this state is made to maintain the checked state status ...of each categories ...
  const [filters, setFilters] = useState({
    species: [],
    gender: [],
    origin: [],
  });

  //URL ..but i have made it customize just for the page updation
  let url = `https://rickandmortyapi.com/api/character/?page=${currentPage}&name=${searchState}`;
  // let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    const fetchData = async () => {
      //try and catch just to handling the errors become easier,...
      try {
        //here async ,await is used instead of .then as its a good practice ..
        const res = await fetch(url);

        // res.ok tells us about the request send to HTTP is successfull or not ..
        if (res.ok) {
          console.log("Promise resolved and HTTP status is successful");
          const data = await res.json(); //it returns the json object..
          console.log("Data..", data);
          // console.log("Data Info..", data.info);
          // console.log("Data Results..", data.results);
          setPageInfo(data.info);
          setDataArray(data.results); //its an array of characters...
          console.log(data.results);
        } else {
          console.error("Promise resolved but HTTP status failed");
        }
      } catch (err) {
        console.log("Error: ", err);
      }
    };
    fetchData();
  }, [url]);

  //here dependencies }, [url]); is changing after the state update i.e.(currentPage) so every tym the api will be called for the particular page ..

  //filter method is used to return a new array on basis of condition ...

  // Har dataArray item ek ek karke jaa rah hai with help of filter method ...

  //1) filters.species.length === 0 && filters.gender.length === 0 && filters.origin.length === 0 then ,
  // filter array is empty matlb each item of data array is copied to filteredArray

  //2) filters.species.includes(item.species) && filters.gender.includes(item.gender) && filters.origin.includes(item.origin.name) if ,
  // Agar ye 3no condition saath mein true hota hai wo particular data array item ka then that item is returned and stored in filtered Array ...

  const filteredDataArray = dataArray.filter((item) => {
    const speciesMatch =
      filters.species.length === 0 || filters.species.includes(item.species);
    const genderMatch =
      filters.gender.length === 0 || filters.gender.includes(item.gender);
    const originMatch =
      filters.origin.length === 0 || filters.origin.includes(item.origin.name);

    // console.log('Checking ..',speciesMatch,genderMatch,originMatch);

    return speciesMatch && genderMatch && originMatch;
  });

  //For Reference ....
  // {
  //   species: [],
  //   gender: [],
  //   origin: [],
  // }

  // Ab yaha dekha jaaye toh main Array abhi filteredArray hai poora main document ka not the dataArray ..

  const setFilterChange = (category, value, isChecked) => {
    setFilters((prevFilters) => {
      // console.log('Checking ....',[...prevFilters[category], value]);

      // [...prevFilters[category], value] --------->>>>
      // [Male], next tym -[Male,Female],next tym - [Male,Female,other]

      // prevFilters[category].filter((item) => item !== value------------->>>>>>>>>
      // this is called when the user unchecks the box so to remove that item from the filters

      // For  that specific category in filters variable it will create new Array and  keep all item except the passed item

      // { ...prevFilters, [category]: updatedCategory }------------->>>>>>>
      // Since updating the key : value pair since updatedCategory is an array and also a value for the key i.e.[category]..

      // updatedCategory is the updated array ..

      const updatedCategory = isChecked
        ? [...prevFilters[category], value]
        : prevFilters[category].filter((item) => item !== value);

      return { ...prevFilters, [category]: updatedCategory };
    });
    console.log("FiltersCheckboxItems : ", filters);
  };

  return (
    <>
      <h1 className="text-center mt-5 mb-4">Rick And Morty</h1>

      <div className="container" id="main-container">
        <div className="row">
          <div className="col-12 col-md-4 col-lg-3 mb-4" id="filter-container">
            <Filter
              setFilterChange={setFilterChange}
              setCurrentPage={setCurrentPage}
            />
          </div>

          <div className="col-12 col-md-8 col-lg-9 mb-4" id="cards-container">
            <div className="row mb-4">
              <div className="col-12 col-lg-8 col-md-8">
                <Search
                  setCurrentPage={setCurrentPage}
                  setSearchState={setSearchState}
                />
              </div>
              <div className="col-12 col-lg-4 col-md-4">
                {/* Todo later to implement its functionalities .. */}
                <Sorting
                  filteredDataArray={filteredDataArray}
                  setDataArray={setDataArray}
                />
              </div>
            </div>

            <div className="row">
              {/* Display "Data not found" if the filteredDataArray array is empty, else display the cards */}
              {filteredDataArray.length === 0 ? (
                <div className="col-12 text-center no-data">
                  <p>Data not found</p>
                </div>
              ) : (
                filteredDataArray.map((item) => (
                  <div
                    className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
                    key={item.id}
                  >
                    <a href={`/details/${item.id}`} className="card-link">
                      <Card
                        created={item.created}
                        id={item.id}
                        title={item.name}
                        gender={item.gender}
                        status={item.status}
                        species={item.species}
                        imgUrl={item.image}
                        origin={item.origin}
                        location={item.location}
                      />
                    </a>
                  </div>
                ))
              )}
            </div>

            {/* Agar data nahi hua toh pageNumbers Show nahi karenga.. */}
            {filteredDataArray.length > 0 && (
              <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalPages={pageInfo.pages}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
