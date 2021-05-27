import React, { useState, useEffect } from 'react';
import { Card, CardColumns } from 'react-bootstrap';
import LogoImg  from '../img/logoimg.png'
import numberWithComma from '../utills/numberComma'




function CoronaInfoCountries() {
    const [countries, setCountries] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

  // https://disease.sh/v3/covid-19/countries
  useEffect(async() => {
    setLoading(true);
    await fetch("https://disease.sh/v3/covid-19/countries?sort=cases")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
        setLoading(false);
      }).catch ((e) => {
        setError(e)
    });
  }, []);

  if (loading) return (
    <div className="flex flex-col text-white justify-center items-center text-center" style={{marginBottom: "40%"}}>
        <div className="flex flex-row mb-5 justify-center mt-5 text-center">
        </div>
        <img src={LogoImg} className="loding-img block h-8 w-8 justify-center items-center mb-3" alt="loding" />
        정보 불러오는중..
    </div>

  );
  
  if (error) return <div>{error}</div>;
  if (!countries) return null; 

  return (
      <>
        <CardColumns>
          {countries.map(({ country, cases, countryInfo, continent }) => (
              <Card className="card" key={country}>
                <Card.Img variant="top" src={countryInfo.flag} />
                <Card.Body>
                  <Card.Title>{country}</Card.Title>
                  <Card.Text>
                  {numberWithComma(cases)}명
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">{continent}</small>
                </Card.Footer>
              </Card>
          ))}
        </CardColumns>
    </>
  );
};



export default CoronaInfoCountries;
