import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import LogoImg  from '../img/logoimg.png'



function CoronaInfoKoreaApi() {
    const [countryInfo, setCountryInfo] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(async() => {
        setLoading(true);
        await fetch("https://disease.sh/v3/covid-19/countries/kr")
        .then((response) => response.json())
        .then((data) => {
            setCountryInfo(data);
            setLoading(false);
        }).catch ((e) => {
            setError(e)
        });
    }, []);

    if (loading) return (
        <div className="flex flex-col text-white mb-5 justify-center items-center text-center">
            <div className="flex flex-row mb-5 justify-center mt-5 text-center">
                <span className="text-4xl text-center">오늘의 코로나</span>
            </div>
            <img src={LogoImg} className="loding-img block h-8 w-8 justify-center items-center mb-3" alt="loding" />
            정보 불러오는중..
        </div>
    );
    if (error) return <div>{error}</div>;
    if (!countryInfo) return null;

    return (
        <div className="flex flex-col text-white mb-5">
            <div className="flex flex-row mb-5 justify-center mt-1 text-center">
                <span className="text-4xl text-center"><i className="fas fa-bullhorn"></i>&nbsp;오늘의 코로나</span>
            </div>
            <div className="flex flex-row rounded-2xl justify-center custom-color"> 
                <div className="flex flex-col mr-3"><span className="text-gray-500 text-base md:text-xl"><i className="fas fa-user"></i>&nbsp;총 확진자</span>
                    <div className="flex flex-col md:flex-row md:items-center justify-center">
                        <span className="notosans-black text-white text-xl md:text-4xl"><CountUp separator="," start={0} end={countryInfo.cases}/>명</span>
                        <span className="badge badge-secondary text-xl m-2"><b>+</b>&nbsp;<CountUp separator="," start={0} end={countryInfo.todayCases}/>명</span>
                        <div className="border-b md:border-b-0 w-6/6 md:w-0 md:h-4/5 my-2 md:my-0 md:border-r pr-1 border-gray-500"></div>
                    </div>
                </div>
                <div className="flex flex-col mr-3"><span className="text-gray-500 text-base md:text-xl"><i className="fas fa-user-check"></i>&nbsp;격리해제</span>
                    <div className="flex flex-col md:flex-row md:items-center">
                        <span className="notosans-black text-white text-xl md:text-4xl"><CountUp separator="," start={0} end={countryInfo.recovered}/>명</span>
                        <span className="badge badge-secondary text-xl m-2"><b>+</b>&nbsp;<CountUp separator="," start={0} end={countryInfo.todayRecovered}/>명</span>
                        <div className="border-b md:border-b-0 w-6/6 md:w-0 md:h-4/5 my-2 md:my-0 md:border-r pr-1 border-gray-500"></div>
                    </div>
                </div>
                <div className="flex flex-col mr-3"><span className="text-gray-500 text-base md:text-xl"><i className="fas fa-user-times"></i>&nbsp;사망자</span>
                    <div className="flex flex-col md:flex-row md:items-center">
                        <span className="notosans-black text-white text-xl md:text-4xl"><CountUp separator="," start={0} end={countryInfo.deaths}/>명</span>
                        <span className="badge badge-secondary text-xl m-2"><b>+</b>&nbsp;<CountUp separator="," start={0} end={countryInfo.todayDeaths}/>명</span>
                        <div className="border-b md:border-b-0 w-6/6 md:w-0 md:h-4/5 my-2 md:my-0 md:border-r pr-1 border-gray-500"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CoronaInfoKoreaApi;
