import './App.css';
import { Private } from './auth/Private';
import { Profile } from './auth/Profile';
import { Counter } from './class/Counter';
import { RandomNumber } from './restriction/RandomNumber';



function App() {
  // const personName = {
  //   firstName: "Vuong",
  //   lastName: "Tran",
  // }

  // const listName = [
  //   {
  //     firstName: "Vuong",
  //     lastName: "Tran",
  //   },
  //   {
  //     firstName: "Thuy",
  //     lastName: "Tran",
  //   },
  //   {
  //     firstName: "Bui",
  //     lastName: "Phuoc",
  //   }
  // ]
  return (
    <div className="App">
      <RandomNumber value={10} isNegative />
    </div>
  );
}

export default App;
