import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Ideas, Videos } from './components';
import 'boxicons';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/ideas" element={<Ideas />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
