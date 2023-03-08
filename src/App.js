import './App.css';
import ResultsTable from './ResultTable'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Anomaly detection output</h1>
        <p>Here you can find the output of the predictions made by the machine learning model.<br></br>
        Model: -. Dataset: -.</p>
        <ResultsTable />
        <p></p>
      </header>
    </div>
  );
}

export default App;
