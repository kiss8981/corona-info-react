import React, { Component } from 'react';
import { Helmet } from 'react-helmet'
import Map from "../utills/kakaoMapConfirm";

class coronaInfo extends Component {

  render() {
    return (
      <>
          <Helmet>
                <title>코로나 정보 - 국내 확진자</title>
                <meta name="description" content="코로나 관련 국내 확진자 정보를 쉽게 확인할 수 있습니다"/>
                <meta name="title" property="og:title" content="코로나 정보 - 국내 확진자" />
                <meta name="description" property="og:description" content="코로나 관련 국내 확진자 정보를 쉽게 확인할 수 있습니다"/>
                <meta property="og:site_name" content="코로나 정보"/>
          </Helmet>
        <div className="flex flex-col text-white justify-center items-center text-center" style={{marginBottom: "40%"}}>
        <span className="text-4xl text-center mt-2 mb-4">국내 확진자 정보</span>
        <Map/>
        </div>
      </>
    );
  }
}

export default coronaInfo;