import './App.css';
import { Login } from './components/pages/Login';
import {
  BrowserRouter,

} from 'react-router-dom'
function App() {
  return (
    <>
      <BrowserRouter>
        <button className='btn btn-primary'>ボタン</button>
        <Login />
      </BrowserRouter>
    </>
  );
}

export default App;
