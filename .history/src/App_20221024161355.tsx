import './App.css';
import { Greet } from './components/Greet';
import Person from './components/Person';

function App() {
  const PersonName = {
    firstName: "Vuong",
    lastName: "Tran"
  }
  return (
    <div className="App">
      <Person />
      <Greet name="Vuong Tran 65" messageCount={12} isLoggedIn={true}  />
    </div>
  );
}

export default App;
