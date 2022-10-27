import './App.css';
import { Box } from './Context/Box';
import { ThemeContextProvider } from './Context/ThemeContext';
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
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
