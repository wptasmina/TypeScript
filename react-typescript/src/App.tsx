import logo from './logo.svg';
import './App.css';
import User from './components/User/User';
import ArrayUser from './components/ArrayOfUser/ArrayUser';
import ObjectType from './components/objectType/ObjectType';
import ObjectArray from './components/ObjetArray/ObjectArray';
import Union from './components/Union-Type/Union';
import Button from './components/Children-type/Button';
import TypingStyle from './components/typing style/TypingStyle';
import UseStates from './components/Children-type/UseStates';
import EventType from './components/Children-type/EventType';


// object Type
const user1 = {
  name: ["Tasmina akter, Sifat, Rayhen"],
  email: "tasmina@gmail.com",
  id: 21113435,
  age: 29,
  isRegister: true,
  leng: [" Bangle, English, Fance"]
}
const user2 = {
  name: ["Sumiya akter, Sar"],
  email: "sumiya@gmail.com",
  id: 21113435,
  age: 32,
  isRegister: true,
  leng: ["English, Fance"]
}

//object of Array
 const data = [
  {
  id: 1,
  title: "Web Developer",
  country: "Bangladesh",
  text: true
 },
 {
  id: 2,
  title:" Full Stack Developer",
  country: "Bangladesh",
  text: false
 }
]


function App() {
  return (
    <div className="App">
      <p>
        Edit Typescripet.
      </p>
        <User name="Tasmina akter" email="tasmina@gmail.com" id={23435} isRegister={true}/>
        <ArrayUser leng={[" Bangle, English"]} name="Tasmina akter" id={123439} isRegister={false}/>
        <ObjectType user={user1}/>
        <ObjectType user={user2}/>
        
        <ObjectArray users={data} />

        <Union status="waiting"/>

        <Button>click me</Button>

        <TypingStyle/>
        <UseStates />
        <EventType />
        
    </div>
  );
}

export default App;
