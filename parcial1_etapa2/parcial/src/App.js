import Navbar from './components/navbar';
import Login from './components/login';
import './App.css';

function App() {
  return (
    <div className="App">
     <header>
        <Navbar />
     </header>
     <div>
        <Login />
     </div>
     <footer style={{marginTop:'90px'}}>
        <p>Contact us: +57 3102105253 - info@tusegundazo.com - @tusegundazo</p>
     </footer>
    </div>
  );
}

export default App;
