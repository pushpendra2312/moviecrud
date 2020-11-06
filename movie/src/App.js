// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import Header from './components/common/header';
import ShowAllMovies from './components/showAllMovies';
import AddMovies from "./components/addpage";
import PageNotFound from "./components/PageNotFound";
import { Route, Switch } from 'react-router-dom';
import EditPage from './components/EditPage';
function App() {
  return <>
    <Header />
    <Switch>
      <Route path='/' exact component={ShowAllMovies} />
      <Route path='/add' exact component={AddMovies} />
      <Route path="/editpage/:id" component={EditPage} exact></Route>
      <Route component={PageNotFound} />
    </Switch>
    {/* <ShowAllMovies /> */}
  </>
}

export default App;
