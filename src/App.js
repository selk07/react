import logo from './logo.svg';
import './App.css';
import ControlledForm from './components/ControlledForm';
import UncontrolledForm from './components/UncontrolledForm';
import UserData from './components/UserInfo';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='Border-div'>
          <h2>ControlledForm</h2>
          <ControlledForm/>
        </div>
        <div className='Border-div'>
          <h2>UncontrolledForm</h2>
          <UncontrolledForm/>
        </div>
        <div className='Border-div'>
          <h2>useEffect</h2>
          <UserData/>
        </div>
        
      </header>
    </div>
  );
}

export default App;
