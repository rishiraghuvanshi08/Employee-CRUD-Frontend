import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Employee from './components/Employee';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Company from './components/Company';
import Errors from './components/Error';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Company />} />
          <Route path='/employee' element={<Employee />} />
          <Route path='*' element={<Errors />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
