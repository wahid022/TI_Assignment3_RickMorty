import React from "react";
import ReactPaginate from 'react-paginate';

export default function Pagination({totalPages,currentPage,setCurrentPage}) {

  


  // let handlePrevious = () => {
  //   setCurrentPage((prevValue)=>{
  //     return prevValue-1
  //   });
  // };

  // let handleNext = () => {
  //     setCurrentPage((prevValue)=>{
  //       return prevValue+1
  //     });
  // };

  return (

    // Here Using Paginate packages but have done with normal concept also ..

      <ReactPaginate
      breakLabel="..."
      nextLabel="Next >"
      previousLabel="< Prev"
      forcePage={currentPage - 1} // Adjusting for zero-based index
      onPageChange={(curPage) => {
        setCurrentPage(curPage.selected + 1); // // oth index iska default value 0 hota hai but hum 1st page se start kar rahe hai thats why 
      }}
      pageCount={totalPages}
      className="pagination justify-content-center gap-4 my-4"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      activeClassName="active"
      nextClassName="btn btn-primary  bg-light"
      previousClassName="btn btn-primary  bg-light"
    />





    // <div className="pagination">
    //   <button
    //     className="btn btn-outline-primary"
    //     onClick={handlePrevious}
    //     // disabled={!prev}
    //   >
    //     Previous
    //   </button>
    
    //   <span className="mx-2">
    //     Page {currentPage} of {totalPages}
    //   </span>
    //   <button
    //     className="btn btn-outline-primary"
    //     // onClick={handleNext}
    //     // disabled={!next}
    //   >
    //     Next
    //   </button>
    // </div>
  );
}
