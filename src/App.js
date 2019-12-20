import React, { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
function App() {
  const [city, saveCity] = useState ('');
  const [country , saveCountry] = useState('');

  const queryData = data  =>{
    if (data.city === '' || data.country === '') {
      
      return;
    }

    saveCity(data.city);
    saveCountry(data.country);
  }

  return (
    <div >
      <Header
        titleHeader='Clima react app'
      />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <Form 
              queryData ={queryData}
              />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
