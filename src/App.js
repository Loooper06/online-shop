import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './router';
import TopBar from './components/topBar/TopBar';
import Footer from './components/footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import Datas from './Datas';

const App = () => {
  let router = useRoutes(routes);
  return (
    <div>
      <TopBar />
      {/* <Datas/> */}
      {router}
      <Footer />
    </div>
  );
}

export default App;