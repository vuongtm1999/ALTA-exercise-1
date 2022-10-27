import './App.css';
import { Box } from './Context/Box';
import { ThemeContextProvider } from './Context/ThemeContext';
import { UserContext } from './Context/UserContext';
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
      <UserContext>
        <Box />
      </UserContext>
    </div>
  );
}

export default App;
