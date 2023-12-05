import { FretboardQuiz } from "./components/fretboard.quiz.tsx";
import { IntervalQuiz } from "./components/interval.quiz.tsx";
import { ScaleReference } from "./components/Scale.tsx";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
          Learn React
        </a>
      </header> */}
      <FretboardQuiz />
      <br />
      <br />
      <br />
      <IntervalQuiz />
      {/* <ScaleReference /> */}
    </div>
  );
}

export default App;
