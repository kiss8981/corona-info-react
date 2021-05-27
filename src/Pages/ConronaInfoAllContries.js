import React, { useState, useEffect } from 'react';
import { Card, CardColumns, Container} from 'react-bootstrap';
import LogoImg  from '../img/logoimg.png'
import numberWithComma from '../utills/numberComma'
import  { Helmet }  from  'react-helmet';




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

  if (error) return <div>{error}</div>;
  if (!countries) return null;  

  return (
      <>
      <Helmet>
                <title>코로나 정보 - 세계정보</title>
                <meta name="description" content="코로나 관련 세계정보를 쉽게 확인할 수 있습니다"/>
                <meta name="title" property="og:title" content="코로나 정보 - 세계정보" />
                <meta name="description" property="og:description" content="코로나 관련 세계정보를 쉽게 확인할 수 있습니다"/>
                <meta property="og:site_name" content="코로나 정보"/>
    </Helmet>
      <Container>
      <div className="flex flex-col text-white mb-5 mt-2 justify-center items-center text-center">
            <span className="text-4xl text-center">전세계 확진자</span>
        </div>
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
    </Container>
    </>
  );
};



export default CoronaInfoCountries;
