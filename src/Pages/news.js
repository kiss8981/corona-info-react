import React, { Component } from 'react';
import { Container } from 'react-bootstrap'
import NewsCrawlerApi from '../api/newsCrawler'
import  { Helmet }  from  'react-helmet';

class maskPage extends Component {

  render() {
    return (
      <>
        <Helmet>
                <title>코로나 정보 - 뉴스</title>
                <meta name="description" content="코로나 관련 뉴스를 쉽게 확인할 수 있습니다"/>
                <meta name="title" property="og:title" content="코로나 정보 - 뉴스" />
                <meta name="description" property="og:description" content="코로나 관련 뉴스를 쉽게 확인할 수 있습니다"/>
                <meta property="og:site_name" content="코로나 정보"/>
        </Helmet>
        <Container>
        <div id="newssel" className="text-white justify-center mt-2 items-center text-center">
        <span className="text-4xl text-center">관련 뉴스</span>
          <NewsCrawlerApi/>
        </div>
        </Container>
      </>
    );
  }
}

export default maskPage;