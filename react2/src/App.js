import './App.css';
import ChangeColor from './ChangeColor';
import Class_fun from './Class_fun';
import Clock from './Clock';
import One from './One';
import PropDrilling from './PropDrilling';
import Reactform from './Reactform';
import UseContext1 from './UseContext1';
import UseRef from './UseRef';


function Click(){
  console.log('This is react button')
  
}

function read(){
  document.getElementById('oo').innerHTML = 'This is react text document pls read it carefully';
}

  
function App() {
  return (
    <div className="App">
      <p id='oo'>Hello React, this is my first button</p>
      <button onClick={read}>Read</button><br></br>
      <button onClick={Click}>CheckConsole</button>
        

      <One/>
      <ChangeColor/> 
      <Clock/>
      <Class_fun/>
      <Reactform/>
      <UseRef/>
      <PropDrilling/>
      <UseContext1/>

    </div>
  );
}

export default App;
