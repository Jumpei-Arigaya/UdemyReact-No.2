import './App.css';
import axios from 'axios';

const onClickUsers = () => {
  axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
    console.log(res.data);
  }).catch((error) => console.log(error))
}

const onClickUser1 = () => {
  axios.get("https://jsonplaceholder.typicode.com/users?id=3").then((res) => {
    console.log(res.data);
  }).catch((error) => console.log(error))
}

function App() {
  return (
    <div className="App">
      <button onClick={onClickUsers}>users</button>
      <button onClick={onClickUser1}>id=1のuser</button>
    </div >
  )
}
export default App;
