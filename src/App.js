import { Route, BrowserRouter } from 'react-router-dom';
import Layout from './Layouts/Layout';
import Home from './Pages/home'
import maskinfo from './Pages/mask'
import coronainfo from './Pages/ConfirmInfo'
import CoronaInfoCountries from './Pages/ConronaInfoAllContries'



function App() {
  return (
    <BrowserRouter>
      <Layout>
          <Route exact path="/" component={Home}/>
          <Route exact path="/mask" component={maskinfo}/>
          <Route exact path="/info" component={coronainfo}/>
          <Route exact path="/countries" component={CoronaInfoCountries}/>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
