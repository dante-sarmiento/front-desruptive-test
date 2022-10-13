import './App.css';
import { Route, Routes } from 'react-router-dom';
import CircleGraphic from './components/graphics/CircleGraphic/CircleGraphic';
import LineGraphic from './components/graphics/LineGraphic/LineGraphic';
import Table from './components/Table/Table';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/*' element={<CircleGraphic />} />
      <Route path='/mercado' element={<Table />} />
      <Route path='/transacciones' element={<LineGraphic />} />
    </Routes>
    </>
  );
}

export default App;

// <div className="App">
//   <CircleGraphic />
//   <Table />
//   <LineGraphic />
// </div>
