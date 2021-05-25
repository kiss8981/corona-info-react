import React, { useState, useEffect } from 'react';
import { Line, Doughnut } from 'react-chartjs-2'
import axios from 'axios'
import LogoImg  from '../img/logoimg.png'



function CoronaInfoCountries() {
    const [confirmData, setconfirmData] = useState();
    const [comparedData, setComparedData] = useState();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(async() => {
        setLoading(true);
        setError(null)
        setconfirmData(null)
        setComparedData(null)
        const feachEvent = async() => {
            const res = await axios.get("https://api.covid19api.com/total/country/kr")
            makeData(res.data)
        }
        const makeData = (items) => {
            const arr = items.reduce((acc, cur)=> {
                const currentDate = new Date(cur.Date);
                const year = currentDate.getFullYear();
                const month = currentDate.getMonth();
                const date = currentDate.getDate();
                const confirmed = cur.Confirmed;
                const active = cur.Active;
                const death = cur.Deaths;
                const recovered = cur.Recovered;
                
                const findItem = acc.find(a => a.year === year && a.month === month);
                if (!findItem) {
                    acc.push({ year, month, date, confirmed, active, death, recovered })
                }
                if(findItem && findItem.date < date) {
                    findItem.active = active;
                    findItem.death = death;
                    findItem.date = date;
                    findItem.month = month;
                    findItem.recovered = recovered;
                    findItem.confirmed = confirmed;
                }
                return acc;
            }, [])
            const labels = arr.map(a => `${a.month+1}월`);
            setconfirmData({
                labels,
                datasets: [
                    {
                        label: "국내 확진자",
                        backgroundColor: "#05deb3",
                        fill: true,
                        data: arr.map(a=>a.confirmed)
                    },
                ]
            });
            const lastMonth = arr[arr.length - 1]
            setComparedData({
                labels: ['확진자', '격리헤제' , '사망'],
                datasets: [
                    {
                        label: "누적 확진, 헤제, 사망 비율",
                        backgroundColor: ["#FF3D67", "#059bff", "#ffc233"],
                        borderColor: ["#FF3D67", "#059bff", "#ffc233"],
                        fill: false,
                        data: [lastMonth.confirmed, lastMonth.recovered, lastMonth.death]
                    },
                ]
            });
            setLoading(false);
        }
        try {
        feachEvent()
        } catch(e) {
            setError(e)
        }        
    }, []);


  if (loading) return (
    <div className="flex flex-col text-white mb-5 justify-center items-center text-center">
        <div className="flex flex-row mb-5 justify-center mt-5 text-center">
            <span className="text-5xl text-center">국내 코로나 현황</span>
        </div>
        <img src={LogoImg} className="loding-img block h-8 w-8 justify-center items-center mb-3" alt="loding" />
        정보 불러오는중..
    </div>
    );
  if (error) return (
    <div className="flex flex-col text-white mb-5 justify-center items-center text-center">
        <div className="flex flex-row mb-5 justify-center mt-5 text-center">
            <span className="text-5xl text-center">국내 코로나 현황</span>
        </div>
        <p>에러발생 {error}</p>
    </div>
    );
  if (!confirmData) return null;  

  return (
      <>
      <div className="flex flex-col text-white mb-5 mt-5 justify-center items-center text-center">
            <span className="text-5xl text-center mb-5 text-white">국내 코로나 현황</span>
            <div className="flex flex-col items-center justify-center">
                <Line data={confirmData} options= {
                    { title: { display: true, text: "누적 확진자 추이", fontSize: 16 }},
                    { legend: { display: true, position: "bottom"} }
                }/>
            </div>
            <div className="flex flex-col items-center justify-center mt-3">
                <Doughnut data={comparedData} options= {
                    { title: { display: true, text: `누적 확진, 격리 헤제, 사망 (${new Date().getMonth()+1}월)`, fontSize: 16 }},
                    { legend: { display: true, position: "bottom"} }
                }/>
            </div>
        </div>
    </>
  );
};



export default CoronaInfoCountries;
