import './App.css';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Input } from './components/Input';

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
      <Container styles={ { border: "1px solid red", padding: "10px" } } />
    </div>
  );
}

export default App;
