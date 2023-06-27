
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");// Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);//alert is an object
  const [disable, setDisable] = useState("enabled");
  const [btnColor, setBtnClor] = useState("primary");
    
  const showAlert=(message, type)=>{
        setAlert({
          msg:message,
          type:type
        })
        setTimeout(() => {
          setAlert(null);
        }, 1500);
  }
  const toggleMode =()=>{
      if(mode==='light')
      {        
        setMode('dark');        
        document.body.style.backgroundColor = '#000E40';
        showAlert("Dark mode has been enabled","success")
        document.title='TextUtils-Dark Mode'; //used to change tab name
       // setInterval(() => {
      //    document.title='TextUtils is Amazing';
      //  }, 2000);
      //  setInterval(() => {
      //    document.title='Install TextUtils';
      //  }, 1500);//is used tio change tab name frequently

     }
     else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert("Light mode has been enabled","success")
      document.title='TextUtils-Light Mode';
     }

  }
  const toggleRed =()=>{
    if(mode==='light')
    {
        console.log(disable);
      setMode('dark');
      setDisable('disabled');
      setBtnClor('danger');
      document.body.style.backgroundColor = '#800020';
      showAlert("Background set to red","success")
      
   }
   else{
    setMode('light');
    setDisable('enabled');
    setBtnClor('primary');
    document.body.style.backgroundColor ='white';
    showAlert("Light mode has been enabled","success")
    console.log(disable);
   }
   

}

const toggleYellow =()=>{
  if(mode==='light')
  {
      console.log(disable);
    setMode('dark');
    setDisable('disabled');
    setBtnClor('warning');
    document.body.style.backgroundColor = '#dffe00';
    showAlert("Background set to yellow","success")
    
 }
 else{
  setMode('light');
  setDisable('enabled');
  setBtnClor('primary');
  document.body.style.backgroundColor ='white';
  showAlert("Light mode has been enabled","success")
  console.log(disable);
 }
}


  return (
    <>  
    <Router>
    <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} toggleRed={toggleRed} toggleYellow={toggleYellow} disable={disable}/>
    <Alert alert={alert}/>
    <div className="container my-3">
     <Routes>
      {/*to use exact because
      /users-->Component.1
      /users/home-->Component.2     React must get confused so we use exact to exactly point out
      */}
            <Route exact path="/about" element={<About />}>
            </Route>
            <Route exact path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} btnColor={btnColor} />}>
            </Route>
          </Routes> 
     
    </div>
    </Router> 
    
    </> 

  );
}

export default App;
