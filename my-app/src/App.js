import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'

function App() {
  return (
    <>
    <Navbar title='Case-Convertor' abouttext='About Text'/>
    <div className='container my-3' >
      <TextForm heading="Just type it"/>
    </div>
    </>
  );
}

export default App;
