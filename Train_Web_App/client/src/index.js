import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import {
  Register,
  FindTrain,
  GetTrains,
  Login,
  Home, } from './scenes' 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <App />

      {/* Routes */}
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/auth" Component={Login} />
        <Route path="/register" Component={Register} />
        <Route path="/findtrain" Component={FindTrain} />
        <Route path="/gettrains" Component={GetTrains} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
