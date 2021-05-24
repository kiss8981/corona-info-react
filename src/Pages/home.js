import React, { Component } from 'react';
import { Container, Card, CardColumns} from 'react-bootstrap';
import CoronaInfoKoreaApi from '../api/CoronaInfoKoreaApi'

import 'holderjs';

class home extends Component {
  render() {
    setTimeout(() => console.clear(), 500);
    return (
      <>
        <div className="w-screen h-screen flex flex-col items-center black" style={{width: "100%"}}>
        <Container>
          <CoronaInfoKoreaApi/>
          <CardColumns>
            <Card className="card">
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>뉴스 1</Card.Title>
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
        </Container>
        </div>
        
    </>
    );
  }
}

export default home;