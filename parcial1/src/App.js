import './App.css';
import FormComponent from './components/form';
import NavBar from './components/navbar';
import Image from 'react-bootstrap/Image';
import navImage from './navImage.png'

function App() {
  return (
    <div className="App">
      <NavBar />  
      <Image src={navImage} rounded/>
      <h1>Parcial 1</h1>
      <FormComponent />
    </div>
  );
}

export default App;
