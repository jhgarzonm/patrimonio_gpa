// pages/SitePage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SiteDetails from '../components/SiteDetails';
import heritageSites from '../data/heritageSites';

function SitePage() {
  const { id } = useParams();
  const [site, setSite] = useState(null);

  useEffect(() => {
    const selectedSite = heritageSites.find((site) => site.id === parseInt(id));
    setSite(selectedSite);
  }, [id]);

  return (
    <div className="site-page">
      {site ? (
        <SiteDetails site={site} />
      ) : (
        <div>Loading site information...</div>
      )}
    </div>
  );
}

export default SitePage;
