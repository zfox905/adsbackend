import logo from './logo.svg';
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";


import Ad from "./components/ad";
import AdList from "./components/adlist";
import Header from "./components/Header"
import LeftSearch from "./components/LeftSearch"

import { Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login";

import { BrowserRouter as Router } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

import React, { useState, useContext } from 'react';

import 'mdbreact/dist/css/mdb.css';

import '@elastic/eui/dist/eui_theme_light.css';

import { StateProvider } from './store.js';



const AppContext = React.createContext({});

const App = () => {

  const [value, setValue] = useState();

  const store = {
    brand: { get: value, set: setValue }
  };

  return (
    <>
    <StateProvider>
    <AppContext.Provider value={store}>
      <div className="app">
        <Header />


        <MDBContainer fluid>
          <MDBRow>
            <MDBCol md="2">
              <LeftSearch />
            </MDBCol>


            <MDBCol md="10">
              <AdList />
            </MDBCol>

          </MDBRow>
        </MDBContainer>




      </div>
    </AppContext.Provider>
    </StateProvider>
    <Router>
    <Switch>
           
            <Route exact path="/login" component={Login} />
            
          </Switch>
          </Router>
    </>
  );
}

export default App;
