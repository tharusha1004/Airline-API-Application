import React, {Component} from 'react';
import AddFlight from './components/AddFlight';
import Header from './components/Header'
import Index from './components/Index'
import {BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import Airports from './components/Airports'
import EditFlightx from './components/EditFlightx';
import LoginPage from './components/LoginPage';
import Footer2 from './components/Footer2';


class App extends Component
{
    render() {
        return(
          <div>
            
            <BrowserRouter>
                <div className='mx-5'>
                  <Routes>
                  <Route path="/" exact element={<div><LoginPage/></div>}/>
                    <Route path="/flights" element={<div><Header/><Index/></div>}/>
                    <Route path="/add-flight" element={<div><Header/><AddFlight/></div>}/>
                    <Route path="/airports" element={<div><Header/><Airports/></div>}/>
                    <Route path={"/edit-flight/:id"} element={<div><Header/><EditFlightx/></div>}/>
                  </Routes>
                </div>
                <Footer2/>
            </BrowserRouter>
          </div>
        )
    }
}
export default App