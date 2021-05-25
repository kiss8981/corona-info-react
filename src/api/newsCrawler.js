import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardColumns, Button} from 'react-bootstrap';
import LogoImg  from '../img/logoimg.png'

function NewsInfoApi() {
    const [info, setInfo] = useState([]);
    const [error, setError] = useState(null);

    const [loading, setLoading] = useState(false);
    const getNewsInfo = async () => { 
        try {
            // 요청이 시작 할 때에는 error 와 users 를 초기화하고
            setError(null);
            setInfo(null);
            // loading 상태를 true 로 바꿉니다.
            setLoading(true);
            const response = await axios.get('http://192.168.0.3:8081/coronanews');
            setInfo(response.data.items);
        } catch (error) { 
            console.log(error); 
        }
      setLoading(false);
    };

      useEffect(() => {
        getNewsInfo();
      }, []);

    if (loading) return (
        <div className="flex flex-col text-white mb-5 justify-center items-center text-center">
            <div className="flex flex-row mb-5 justify-center mt-5 text-center"><b>뉴스</b>
                <span className="text-5xl text-center">뉴스</span>
            </div>
            <img src={LogoImg} className="loding-img block h-8 w-8 justify-center items-center mb-3" alt="loding" />
            정보 불러오는중..
        </div>
    );
    if (error) return <div>{error}</div>;
    if (!info) return null;
    return (
      <>
        <div className="text-white justify-center items-center text-center">
        <span className="text-5xl text-center">뉴스</span>
        
        <div className="newscard">
          {info.map(({ title, description, originallink, pubDate }) => (
            <div key={pubDate} className="newscardinfo flex flex-1 justify-center items-center"> 
              <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-5">
              <div className="flex justify-center md:justify-end -mt-16">
                <img src={LogoImg} className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"></img>
              </div>
              <div>
                <h2 className="text-gray-800 text-3xl font-semibold mt-5"dangerouslySetInnerHTML={{__html: title}}></h2>
                <p className="mt-2 text-gray-600" dangerouslySetInnerHTML={{__html: description}}></p>
                <p className="mt-2 text-gray-400">{pubDate}</p>
              </div>
              <div className="flex justify-end mt-4">
                <a href={originallink} class="text-xl font-medium text-indigo-500">추가정보</a>
              </div>
            </div>
            </div>
          ))}
        </div>
        </div>
      </>
    );
}
export default NewsInfoApi;
