import React from 'react';

function Weather({ result }) {

    const { name, main } = result;

    const temperatureUnitKelvin = 273.15;
    if (!name) return null
    return (
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>Clima de {name} es :</h2>
                <p className="temperatura">
                {parseInt(main.temp - temperatureUnitKelvin, 10 )} <span> &#x2103; </span>
                </p>
                <p>Temperatura minima : {parseInt(main.temp_min - temperatureUnitKelvin, 10 )} &#x2103; </p>
                <p>Temperatura máxima: {parseInt(main.temp_max - temperatureUnitKelvin, 10 )} &#x2103; </p>
            </div>

        </div>
    )
}

export default Weather;