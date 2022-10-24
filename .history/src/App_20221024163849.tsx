import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';

function App() {
  const personName = {
    firstName: "Vuong",
    lastName: "Tran",
  }
  return (
    <div className="App">
      <Greet name="Vuong Tran 65" messageCount={12} isLoggedIn={true}  />
      <Person name={personName} />
      <PersonList />
    </div>
  );
}

export default App;
