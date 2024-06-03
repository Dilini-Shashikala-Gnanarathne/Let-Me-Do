import './App.css';
import {useNavigate} from 'react-router-dom'
function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <header className="App-header">
       <h1>Wellcome to Let Me Do</h1>
       <button className="button"  onClick={e=>{navigate('./Users')}}>Click Me</button>
      </header>
    </div>
  );
}

export default App;
