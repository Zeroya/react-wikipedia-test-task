import {HashRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import WikiList from './main/pages/wikipedia-list/WikiList/WikiList';
import CustomSnackbar from './main/components/Snackbar/CustomSnackbar';

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<WikiList />} />
        </Routes>
      </HashRouter>
      <CustomSnackbar />
    </div>
  );
}

export default App;
