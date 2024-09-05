import React from "react";
import "./Card.css";

export default function Card(props) {
  
  const {
    title,
    location,
    imgUrl,
    gender,
    status,
    species,
    id,
    created,
    origin,
  } = props;

  const dateManipulation = (dateString) => {
    let date = new Date();
    let year = date.getFullYear();
    let resultYear = dateString.substr(0, 4);
    return year - resultYear;
  };

  return (
    <div className="card h-100 shadow-sm"
      style={{ borderRadius: "15px", overflow: "hidden", maxHeight: "30rem" }}>

      <img className="card-img-top" src={imgUrl} alt="Card image cap"
        style={{ borderTopLeftRadius: "15px", borderTopRightRadius: "15px", maxHeight: "8rem", objectFit: "cover" }} />

      <div className="card-body d-flex flex-column text-center"
        style={{ flexGrow: 1, padding: "0.5rem" }}>
        <h5 className="card-title mb-2 font-weight-bold" style={{ fontSize: "0.9rem" }}>{title}</h5>
        <p className="text-muted mb-1" style={{ fontSize: "0.75rem" }}>
          ID: {id}
        </p>
        <p className="text-muted" style={{ fontSize: "0.75rem" }}>
          Created: {dateManipulation(created)} Years Ago
        </p>
      </div>

      <ul className="list-group list-container list-group-flush" style={{ fontSize: "0.63rem" }}>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <strong>Gender:</strong> <span>{gender}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <strong>Status:</strong> <span>{status}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <strong>Species:</strong> <span>{species}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <strong>Origin:</strong> <span>{origin.name === 'Earth (Replacement Dimension)' ? 'Earth(RD)' : origin.name}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <strong>Location:</strong> <span>{location.name === 'Earth (Replacement Dimension)' ? 'Earth(RD)' : location.name}</span>
        </li>
      </ul>
    </div>
  );
}