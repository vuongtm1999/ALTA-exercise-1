import './App.css';
import { Box } from './Context/Box';
import { ThemeContextProvider } from './Context/ThemeContext';
import { User } from './Context/User';
import { UserContext, UserContextProvider } from './Context/UserContext';
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
      <UserContextProvider>
        <User />
      </UserContextProvider>
    </div>
  );
}

export default App;
