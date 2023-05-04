// ContactPage.js

import React from 'react';
import './ContactPage.css';

function ContactPage() {
  return (
    <div className="contact-container">
      <h1 className="contact-header">Contacto</h1>
      <form className="contact-form">
        <input type="text" placeholder="Nombre" />
        <input type="email" placeholder="Correo electrónico" />
        <textarea placeholder="Mensaje" rows="5"></textarea>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default ContactPage;


/*
import React from 'react';

function ContactPage() {
  return (
    <div>
      <h1>Contacto</h1>
      <p>Información de contacto y enlaces a nuestras redes sociales.</p>
    </div>
  );
}

export default ContactPage;*/
