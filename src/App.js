import { Route, BrowserRouter } from 'react-router-dom';
import Layout from './Layouts/Layout';
import Home from './Pages/home'
import maskinfo from './Pages/mask'
import coronainfo from './Pages/ConfirmInfo'



function App() {
  return (
    <BrowserRouter>
      <Layout>
          <Route exact path="/" component={Home}/>
          <Route exact path="/mask" component={maskinfo}/>
          <Route exact path="/info" component={coronainfo}/>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
