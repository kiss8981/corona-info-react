import React, { Component } from 'react';
import { Container } from 'react-bootstrap'
import ConronaInfoAllContriesApi from '../api/ConronaInfoAllContriesApi'
import  { Helmet }  from  'react-helmet';

class ConronaInfoAllContries extends Component {

  render() {
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
        <ConronaInfoAllContriesApi/>
    </Container>
      </>
    );
  }
}

export default ConronaInfoAllContries;