import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardColumns} from 'react-bootstrap';
import LogoImg  from '../img/logoimg.png'

const headers = {
    'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'Accept': '*/*',
    'Access-Control-Allow-Origin': '*'
  }

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
            const response = await axios.get('http://localhost:8080/coronanews', {headers});
            setInfo(response.data.items); 
        } catch (error) { 
            console.log(error); 
        }
        setLoading(false);  
        console.log(info)
    };

      useEffect(() => {
        getNewsInfo();
      }, []);

    if (loading) return (
        <div className="flex flex-col text-white mb-5 justify-center items-center text-center">
            <div className="flex flex-row mb-5 justify-center mt-5 text-center">
                <span className="text-5xl text-center">뉴스</span>
            </div>
            <img src={LogoImg} className="loding-img block h-8 w-8 justify-center items-center mb-3" alt="loding" />
            정보 불러오는중..
        </div>
    );
    if (error) return <div>{error}</div>;
    if (!info) return null;
    return (
        <CardColumns>
            <Card className="card">
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>{info}</Card.Title>
                <Card.Text>
                뉴스 1 내용{" "}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 10 mins ago</small>
              </Card.Footer>
            </Card>

            <Card className="card">
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>뉴스 2</Card.Title>
                <Card.Text>
                뉴스 2 내용{" "}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 10 mins ago</small>
              </Card.Footer>
            </Card>
          </CardColumns>
    );
}
export default NewsInfoApi;
