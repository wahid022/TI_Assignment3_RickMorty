import React, { useState } from "react";
import "./Filter.css";

export default function Filter({ setFilterChange, setCurrentPage }) {
  // checkedItems mailnly yaha badges mein use kiya hai maine ..
  const [checkedItems, setCheckedItems] = useState({
    species: [],
    gender: [],
    origin: [],
  });

  //handleCheckboxChange () will be fired every tym when we checked or checked the input element and with a event.target....
  const handleCheckboxChange = (category, event) => {
    const { value, checked } = event.target;
    setFilterChange(category, value, checked);
    // setCurrentPage(1);

    // here update kar rahe hai ki kon sa item checked hai wo checkedItems object mein rahenga .. checked hua toh insert kar de rahe hai agar uncheck hua toh loop chala ke copy bana de rahe hai except that item
    setCheckedItems((prev) => ({
      ...prev,
      [category]: checked
        ? [...prev[category], value]
        : prev[category].filter((item) => item !== value),
    }));
  };

  //Here i am handling the badges when it is clicked...

  const handleBadgeClick = (category, value) => {
    // Cross Button press karneke baad checked ko false karna padenga ... and state ko update bhi..
    setFilterChange(category, value, false);
    // setCurrentPage(1);

    // Again Update karna padenga kyunki cross button ke baad bhi state update ho raha hai kyunki checked items remove ho rah hai ...
    setCheckedItems((prev) => ({
      ...prev,
      [category]: prev[category].filter((item) => item !== value),
    }));
  };

  return (
    <div className="filter-container p-3 bg-light rounded shadow-sm">
      {/* Here i am displaying the badges */}

      {/* Loop mein selected items ke array pe chala raha hoon .. because humko checked items hi display karna hai .. */}

      {/* Object.keys(checkedItems).map((category) ---->>>> ye ek ek karke keys lengae jaise gender ,species ... and then uske array pe loop chala ke diusplay karengae  */}

      {/* checkedItems[category].map((value) ------>>>> yaha pe keys ke array pe iterate karke display kar de rahe hai .. i.e. gender[0],gender[1]... */}

      <div className="badge-display mb-3">
        {Object.keys(checkedItems).map((category) => (
          <div key={category} className="mb-2">
            <div className="d-flex flex-wrap">
              {checkedItems[category].map((value) => (
                <span
                  key={value}
                  className="badge bg-primary text-light me-2 mb-2 d-flex align-items-center position-relative"
                  onClick={() => handleBadgeClick(category, value)}
                >
                  <span className="badge-text">{value}</span>
                  <button
                    type="button"
                    className="btn-close btn-close-white"
                    aria-label="Close"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleBadgeClick(category, value);
                    }}
                  ></button>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Species section hai  */}

      <div className="filter-section mb-3">
        <h4 className="mb-2 text-center">Species</h4>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="speciesHuman"
            value="Human"
            checked={checkedItems.species.includes("Human")} /// Here {...} will return true /False.. This is Written just to take the value in e.target.checked==true/false
            onChange={(e) => handleCheckboxChange("species", e)}
          />
          <label className="form-check-label" htmlFor="speciesHuman">
            Human
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="speciesAlien"
            value="Alien"
            checked={checkedItems.species.includes("Alien")} // Here {...} will return true /False..
            onChange={(e) => handleCheckboxChange("species", e)}
          />
          <label className="form-check-label" htmlFor="speciesAlien">
            Alien
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="speciesHumanoid"
            value="Humanoid"
            checked={checkedItems.species.includes("Humanoid")} // Here {...} will return true /False..
            onChange={(e) => handleCheckboxChange("species", e)}
          />
          <label className="form-check-label" htmlFor="speciesHumanoid">
            Humanoid
          </label>
        </div>
      </div>

      {/* Gender section hai  */}

      <div className="filter-section mb-3">
        <h4 className="mb-2 text-center">Gender</h4>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="genderMale"
            value="Male"
            checked={checkedItems.gender.includes("Male")} // Here {...} will return true /False..
            onChange={(e) => handleCheckboxChange("gender", e)}
          />
          <label className="form-check-label" htmlFor="genderMale">
            Male
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="genderFemale"
            value="Female"
            checked={checkedItems.gender.includes("Female")}
            onChange={(e) => handleCheckboxChange("gender", e)}
          />
          <label className="form-check-label" htmlFor="genderFemale">
            Female
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="genderUnknown"
            value="unknown"
            checked={checkedItems.gender.includes("unknown")}
            onChange={(e) => handleCheckboxChange("gender", e)}
          />
          <label className="form-check-label" htmlFor="genderUnknown">
            Unknown
          </label>
        </div>
      </div>

      {/* Origin section hai  */}

      <div className="filter-section mb-3">
        <h4 className="mb-2 text-center">Origin</h4>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="originEarth"
            value="Earth (C-137)"
            checked={checkedItems.origin.includes("Earth (C-137)")}
            onChange={(e) => handleCheckboxChange("origin", e)}
          />
          <label className="form-check-label" htmlFor="originEarth">
            Earth (C-137)
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="originMars"
            value="Earth (Replacement Dimension)"
            checked={checkedItems.origin.includes(
              "Earth (Replacement Dimension)"
            )}
            onChange={(e) => handleCheckboxChange("origin", e)}
          />
          <label className="form-check-label" htmlFor="originMars">
            Earth (RD)
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="originAbadango"
            value="Abadango"
            checked={checkedItems.origin.includes("Abadango")}
            onChange={(e) => handleCheckboxChange("origin", e)}
          />
          <label className="form-check-label" htmlFor="originAbadango">
            Abadango
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="originUnknown"
            value="unknown"
            checked={checkedItems.origin.includes("unknown")}
            onChange={(e) => handleCheckboxChange("origin", e)}
          />
          <label className="form-check-label" htmlFor="originUnknown">
            Unknown
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="originDimensionC137"
            value="Dimension C-137"
            checked={checkedItems.origin.includes("Dimension C-137")}
            onChange={(e) => handleCheckboxChange("origin", e)}
          />
          <label className="form-check-label" htmlFor="originDimensionC137">
            Dimension C-137
          </label>
        </div>
      </div>
    </div>
  );
}
