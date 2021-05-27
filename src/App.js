import { Route, BrowserRouter } from 'react-router-dom';
import Layout from './Layouts/Layout';
import Home from './Pages/home'
import News from './Pages/news'
import coronainfo from './Pages/ConfirmInfo'
import ConronaInfoAllContries from './Pages/ConronaInfoAllContries'



function App() {
  return (
    <BrowserRouter>
      <Layout>
          <Route exact path="/" component={Home}/>
          <Route exact path="/news" component={News}/>
          <Route exact path="/info" component={coronainfo}/>
          <Route exact path="/countries" component={ConronaInfoAllContries}/>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
