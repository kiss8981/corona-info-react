import React, { Component } from 'react';
import Map from "../utills/kakaoMapConfirm";

class coronaInfo extends Component {

  render() {
    return (
      <>
        <div className="flex flex-col text-white justify-center items-center text-center">
        <span className="text-4xl text-center mt-2 mb-4">국내 확진자 정보</span>
        <Map/>
        </div>
      </>
    );
  }
}

export default coronaInfo;