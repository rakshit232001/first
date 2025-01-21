import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, Link } from "react-router";
import { BrowserRouter as Router} from "react-router-dom";



function App() {
  const [mode,setMode] = useState('light')
  const [myStyle,setMyStyle] = useState({
            color: 'black'
        });
  
  const [alert, setAlert]= useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      type : type
    })

    setTimeout(()=>{
        setAlert(null);
    },1500);
  }
  
  const toggleMode = ()=>{
    if(mode === 'dark'){
    setMode('light');
    setMyStyle({
          color: 'black',
        });
    showAlert("Dark Mode enabled","success");
    document.title = 'TextUtils - Light Mode';
    }
    else{
      setMode('dark');
      setMyStyle({
        color: 'white',
      });
      showAlert("Light Mode enabled","success");
      document.title = 'TextUtils - Dark Mode';
    }
  }
  return (
    <>
    <Router>
    <Navbar aboutText="About" title="TextUtils" style={myStyle} mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container">
        <Routes>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/" element={<TextForm heading="Enter you text"/>}/>
        </Routes>
    </div>
    
    </Router>
    </>
  );
}

export default App;
