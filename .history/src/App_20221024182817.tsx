import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';

function App() {
  const personName = {
    firstName: "Vuong",
    lastName: "Tran",
  }

  const listName = [
    {
      firstName: "Vuong",
      lastName: "Tran",
    },
    {
      firstName: "Thuy",
      lastName: "Tran",
    },
    {
      firstName: "Bui",
      lastName: "Phuoc",
    }
  ]
  return (
    <div className="App">
      <Status status="Vuong" />
    </div>
  );
}

export default App;
