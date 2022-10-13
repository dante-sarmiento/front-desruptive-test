import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Main from './pages/Main/Main';
import MarketDetails from './pages/MarketDetails/MarketDetails';
import Transaction from './pages/Transaction/Transaction';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/*' element={<Main />} />
      <Route path='/mercado' element={<MarketDetails />} />
      <Route path='/transacciones' element={<Transaction />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;

// <div className="App">
//   <CircleGraphic />
//   <Table />
//   <LineGraphic />
// </div>
