import React, { useState, useEffect } from 'react';
import { Card, CardColumns } from 'react-bootstrap';
import LodingPage from '../utills/Loding'
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
    <LodingPage/>
  );
  
  if (error) return <div>{error}</div>;
  if (!countries) return null; 

  return (
      <>
      <CardColumns>
          {countries.map(({ country, cases, countryInfo, continent }) => (
              <Card className="card" key={country}>
                <Card.Img variant="top" src={countryInfo.flag} style={{height: '18vh', width: '40vw'}}/>
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
