import logo from './logo.svg';
import './App.css';
import User from './components/User/User';
import ArrayUser from './components/ArrayOfUser/ArrayUser';
import ObjectType from './components/objectType/ObjectType';


// object Type
const user1 = {
  name: 'Tasmina',
  age: 25,
  isRegister: false,
  leng: [" Bangle, English, Frinch"]
}


function App() {
  return (
    <div className="App">
      <p>
          Edit Typescripet.
        </p>
        <User name="Tasmina akter" email="tasmina@gmail.com" id={23435} isRegister={true}/>
        <ArrayUser leng={[" Bangle, English"]} name="Tasmina akter" id={123439} isRegister={false}/>
        <ObjectType user={user1} />
    </div>
  );
}

export default App;
