import './App.css';
import CircleGraphic from './components/graphics/CircleGraphic/CircleGraphic';
import LineGraphic from './components/graphics/LineGraphic/LineGraphic';
import Table from './components/Table/Table';

function App() {
  return (
    <div className="App">
      <CircleGraphic />
      <Table />
      <LineGraphic />
    </div>
  );
}

export default App;
