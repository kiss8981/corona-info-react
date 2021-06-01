import React from 'react';
import LogoImg  from '../img/logoimg.png'

function lodingImg() {
  return (
      <>
       <div className="flex flex-col text-white justify-center items-center text-center" style={{marginBottom: "40%"}}>
        <div className="flex flex-row mb-5 justify-center mt-5 text-center">
        </div>
        <img src={LogoImg} className="loding-img block h-8 w-8 justify-center items-center mb-3" alt="loding" />
        정보 불러오는중..
        </div>
    </>
  );
};

export default lodingImg;
