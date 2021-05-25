
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LogoImg  from '../img/logoimg.png'



function CoronaInfoKoreaApi() {
    const serviceKey = "" //https://api.corona-19.kr/

    const [info, setInfo] = useState([]);
    const [todayInfo, setTodayInfo] = useState([]);
    const [error, setError] = useState(null);

    const [loading, setLoading] = useState(false);

    const url = `https://api.corona-19.kr/korea/?serviceKey=${serviceKey}`;
    const url2 = `https://api.corona-19.kr/korea/country/new/?serviceKey=${serviceKey}`
    const apiRequest = async () => {
        try {
          // 요청이 시작 할 때에는 error 와 users 를 초기화하고
          setError(null);
          setTodayInfo(null);
          setInfo(null);
          // loading 상태를 true 로 바꿉니다.
          setLoading(true);
          const response1 = await axios.get(
            url
          );
          const response2 = await axios.get(
            url2
          );
          setTodayInfo(response2.data.korea); // 데이터는 response.data 안에 들어있습니다.
          setInfo(response1.data); // 데이터는 response.data 안에 들어있습니다.
        } catch (e) {
          setError(e);
        }
        setLoading(false);
      };

      useEffect(() => {
        apiRequest();
      }, []);

    if (loading) return (
        <div className="flex flex-col text-white mb-5 justify-center items-center text-center">
            <div className="flex flex-row mb-5 justify-center mt-5 text-center">
                <span className="text-5xl text-center">오늘의 코로나</span>
            </div>
            <img src={LogoImg} className="loding-img block h-8 w-8 justify-center items-center mb-3" alt="loding" />
            정보 불러오는중..
        </div>
    );
    if (error) return <div>{error}</div>;
    if (!info) return null;

    return (
        <div className="flex flex-col text-white mb-5">
            <div className="flex flex-row mb-5 justify-center mt-5 text-center">
                <span className="text-5xl text-center">오늘의 코로나</span>
            </div>
            <div className="flex flex-row rounded-2xl justify-center custom-color"> 
                <div className="flex flex-col mr-3"><span className="text-gray-500 text-base md:text-xl">총 확진자</span>
                    <div className="flex flex-col md:flex-row md:items-center">
                        <span id="users" class="notosans-black text-white text-xl md:text-4xl">{info.TotalCase}명 (+ {todayInfo.newCase}명)</span>
                        <div className="border-b md:border-b-0 w-1/6 md:w-0 md:h-4/5 my-2 md:my-0 md:border-r pr-4 border-gray-500"></div>
                    </div>
                </div>
                <div className="flex flex-col mr-3"><span className="text-gray-500 text-base md:text-xl">격리해제</span>
                    <div className="flex flex-col md:flex-row md:items-center">
                        <span id="users" className="notosans-black text-white text-xl md:text-4xl">{info.TotalRecovered}명 (+ {info.TodayRecovered}명)</span>
                        <div className="border-b md:border-b-0 w-1/6 md:w-0 md:h-4/5 my-2 md:my-0 md:border-r pr-4 border-gray-500"></div>
                    </div>
                </div>
                <div className="flex flex-col mr-3"><span className="text-gray-500 text-base md:text-xl">사망자</span>
                    <div className="flex flex-col md:flex-row md:items-center">
                        <span className="notosans-black text-white text-xl md:text-4xl">{info.TotalDeath}명 (+ {info.TodayDeath}명)</span>
                        <div className="border-b md:border-b-0 w-1/6 md:w-0 md:h-4/5 my-2 md:my-0 md:border-r pr-4 border-gray-500"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CoronaInfoKoreaApi;
