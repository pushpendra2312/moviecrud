// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import Header from './components/common/header';
import ShowAllMovies from './components/showAllMovies';
import FindMovies from "./components/findMovies";
import AddMovies from "./components/addpage";
import PageNotFound from "./components/PageNotFound";
import { Route, Switch } from 'react-router-dom';

function App() {
  return <>
    <Header />
    <Switch>
      <Route path='/' exact component={ShowAllMovies} />
      <Route path='/find' exact component={FindMovies} />
      <Route path='/add' exact component={AddMovies} />
      <Route component={PageNotFound} />
    </Switch>
    {/* <ShowAllMovies /> */}
  </>
}

export default App;
