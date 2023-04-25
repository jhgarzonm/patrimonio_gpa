// components/SiteDetails.js
import React from 'react';

function SiteDetails({ site }) {
  return (
    <div className="site-details">
      <h2>{site.name}</h2>
      <p>{site.description}</p>
      <img src={site.image} alt={site.name} />
    </div>
  );
}

export default SiteDetails;
