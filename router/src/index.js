import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Routes, Route, Navigate, Link} from 'react-router-dom'

ReactDOM.render(
  <Router>
    <Routes>
        
        <Route path="/" element={<Home />}/>
        <Route path="/myapps" element={<Navigate replace to="/learn"/>}/>
        
        <Route path="learn" element={<Learn />}>
          <Route path="courses" element={<Courses />} />
          <Route path="bundles" element={<Bundle />} />
        </Route>
    
    </Routes>
  </Router>,
  document.getElementById('root')
);


function Home()
{
  return (
    <div>
      <h1>Home Component</h1>
    </div>
  );
}

function Learn()
{
  return (
    <div>
      <h1>Learn Components</h1>
      <h4>Courses here</h4>
      <Link to="/learn/courses">Courses</Link>|
      <Link to="/learn/bundles">bundle</Link>
    </div>
  );
}

function Courses()
{
  return (
    <div>
      <h1>Courses Here</h1>
    </div>
  );
}

function Bundle()
{
  return (
    <div>
      <h1>Bundle Here</h1>
    </div>
  );
}

reportWebVitals();
