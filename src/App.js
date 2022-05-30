import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Bienvenidos a mi tienda</h1>
      </div>
    </div>
  );
}

export default App;
