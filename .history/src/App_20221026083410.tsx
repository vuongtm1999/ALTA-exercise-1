import './App.css';
import { Counter } from './state/Couner';


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
      <Counter />
    </div>
  );
}

export default App;
