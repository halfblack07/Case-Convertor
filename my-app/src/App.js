import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
// import About from './components/About'
import Alert from './components/Alert'

function App() {
  const [mode, setMode] = useState('light');
  
  const [alert, setAlert] = useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type:type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 5000);
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#171246'
      showAlert("Dark mode has been enabled", "success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
    }
  }
  return (
    <>
    <Navbar title='Case-Convertor' mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className='container my-3' >
      <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
    </div>
    {/* <About/> */}
    </>
  );
}

export default App;
