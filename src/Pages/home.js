import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import  { Helmet }  from  'react-helmet';
import CoronaInfoKoreaApi from '../api/CoronaInfoKoreaApi'
import CoronaInfoCountries from '../api/CoronaInfoCountries'

class home extends Component {
  render() {
    return (
      <>
        <Helmet>
                <title>코로나 정보</title>
                <meta name="description" content="코로나 관련 정보를 쉽게 확인할 수 있습니다"/>
                <meta name="title" property="og:title" content="코로나 정보" />
                <meta name="description" property="og:description" content="코로나 관련 정보를 한눈에 확인할 수 있습니다"/>
                <meta property="og:site_name" content="코로나 정보"/>
        </Helmet>
        <Container>
        <div style={{margin: "4%"}}></div>
          <CoronaInfoKoreaApi/>
          <div style={{margin: "8%"}}></div>
          <CoronaInfoCountries/>
          <div style={{margin: "10%"}}></div>
        </Container>
        
    </>
    );
  }
}

export default home;