import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';

function App() {
  return (
    <div className="App">
      {/* <Greet name = "Bruce" heroName="Batman">
        <p>This is children props</p>
      </Greet>
      <Greet name = "Clark" heroName="Ratman">
        <button>Acion</button>
        </Greet>
      <Welcome name = "Bruce" heroName="Batman"/>
      <Welcome name = "Clark" heroName="Ratman"/>
       */}
      {/* <Message /> */}
      {/* <Greet name = "Diana" heroName="Catman"/>
      <Welcome name = "Diana" heroName="Catman"/> */}
      {/* <Counter/> */}
      {/* <FunctionClick/> */}
      {/* <ClassClick/> */}
      <EventBind/>
    </div>
  );
}

export default App;
