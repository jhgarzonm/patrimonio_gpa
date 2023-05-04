// HomePage.js
import React from 'react';
import './HomePage2.css';
import { useNavigate } from 'react-router-dom';

;

function HomePage() {
    const navigate = useNavigate();
    const handleExploreMap = () => {
        navigate('/mapa');
      };
    
      const handleDiscoverSites = () => {
        navigate('/sitios');
      };
  return (
    <div className="home">
      <h1 className="home-title">Descubre el Patrimonio Cultural de Nuestro Municipio</h1>
      <p className="home-description">Explora y aprende sobre los lugares de patrimonio cultural y turístico en nuestro municipio. Crea rutas personalizadas y vive una experiencia única.</p>
      <div className="home-buttons">
        <button className="home-button" onClick={handleExploreMap}>Explorar el Mapa</button>
        <button className="home-button" onClick={handleDiscoverSites}>Conocer los Sitios</button>
       </div>
       <p className="footer">Vestigia Terra SAS <br></br>Derechos reservados &copy; <br></br>2023</p>
    </div>
  );
}

export default HomePage;
