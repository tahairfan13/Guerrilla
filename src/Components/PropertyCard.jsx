import React from "react";
import { Location } from "../assets/icons";

function PropertyCard({ property }) {
  return (
    <div className="property-card">
      <div className="property-image">
        <img src={property.image.url} alt="property" />
      </div>
      <div className="property-details">
        <h3 className="property-title">{property.title}</h3>
        <p className="property-address">
          <Location width="15" height="15" />
          {property.address}
        </p>
      </div>
    </div>
  );
}

export default PropertyCard;
