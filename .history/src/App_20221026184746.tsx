import './App.css';
import { Private } from './auth/Private';
import { Profile } from './auth/Profile';
import { Counter } from './class/Counter';



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
      <Private isLoggedIn={false} Component={Profile} />
    </div>
  );
}

export default App;
