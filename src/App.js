import logo from './logo.svg';
import './App.css';

function App() {
  const name = "Tien";
  const age = 18;
  const isMale = true;
  const colors = ['red', 'blue', 'yellow'];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello World!
        </a>
        <p>I'm {name}, {age} - {isMale ? 'male' : 'female'}</p>
        {colors.map(color => (
          <div style={{color}}>{color}</div>
        ))}
      </header>
    </div>
  );
}

export default App;
