import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';

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
      <Greet  />
      <Person name={personName} />
      <PersonList names={listName} />
    </div>
  );
}

export default App;
