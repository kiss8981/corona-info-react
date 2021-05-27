import React, { Component } from 'react';
import { Container } from 'react-bootstrap'
import NewsCrawlerApi from '../api/newsCrawler'

class maskPage extends Component {

  render() {
    return (
      <>
        <Container>
          <NewsCrawlerApi/>
        </Container>
      </>
    );
  }
}

export default maskPage;