import './App.css';
import { Header } from './components/Header';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="Octocat.png" className="App-logo" alt="logo" />
        <p>
          GitHub Codespaces <span className="heart">♥️</span> React
        </p>
        <p className="small">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          
            Learn React
            <Header />
          
        </p>
      </header>
    </div>
  );
}

export default App;
