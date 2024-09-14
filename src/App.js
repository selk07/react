import logo from './logo.svg';
import './App.css';
import Stateful from './components/BtnStateful';
import Stateless from './components/BtnStateless';
import ButtonComponent from './components/BtnClass';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <p className='Title-component'>Stateful component</p>
        <Stateful name="Оновити"/> <br/>
        </div>
        <div> 
        <p className='Title-component'>Stateless component</p>
        <Stateless name="Оновити"/>
        </div>
        <div>
        <p className='Title-component'> Class component</p>
        <ButtonComponent/>
        </div>
      </header>

    </div>
  );
}

export default App;
