import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Error from './components/Error';

function App() {
  const [city, saveCity] = useState('');
  const [country, saveCountry] = useState('');
  const [error, saveError] = useState(false);
  const [result, saveResult] = useState({});

  useEffect(() => {
    if (city === '') return;

    const getAPI = async () => {

      const appId = '4c2508f19313c213e6f9ab4a8f114471';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${appId}`;

      const response = await fetch(url);
      const result = await response.json();

      saveResult(result);

    }
    getAPI();
  }, [city , country]);

  const queryData = data => {
    if (data.city === '' || data.country === '') {
      saveError(true);
      return;
    }

    saveCity(data.city);
    saveCountry(data.country);
    saveError(false);
  }


  //component conditionally
  let component;
  if (error) {
    component = <Error message='Campos obligatorios' />
  } else {
    component = null
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
                queryData={queryData}
              />
            </div>
            <div className="col s12 m6">
              {component}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
