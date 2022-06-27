import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hi!</h1>
        <Weather />
      </header>
      <footer>
        This project was coded by Karrie Brooks and is
        <a href="https://github.com/KarrieD/weather-react"> open-sourced </a> on
        GitHub.
      </footer>
    </div>
  );
}

export default App;
