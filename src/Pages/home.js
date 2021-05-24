import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import CoronaInfoKoreaApi from '../api/CoronaInfoKoreaApi'
import NewsCrawlerApi from '../api/newsCrawler'

import 'holderjs';

class home extends Component {
  render() {
    return (
      <>
        <div className="w-screen h-screen flex flex-col items-center black" style={{width: "100%"}}>
        <Container>
          <CoronaInfoKoreaApi/>
          <NewsCrawlerApi/>
        </Container>
        </div>
        
    </>
    );
  }
}

export default home;