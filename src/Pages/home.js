import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import CoronaInfoKoreaApi from '../api/CoronaInfoKoreaApi'
import NewsCrawlerApi from '../api/newsCrawler'
import CoronaInfoCountries from '../api/CoronaInfoCountries'

import 'holderjs';

class home extends Component {
  render() {
    return (
      <>

        <Container>
          <CoronaInfoKoreaApi/>
          <div style={{margin: "15%"}}></div>
          <CoronaInfoCountries/>
          <div style={{margin: "10%"}}></div>
          <NewsCrawlerApi/>
        </Container>
        
    </>
    );
  }
}

export default home;