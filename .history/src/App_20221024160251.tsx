import './App.css';
import { Greet } from './components/Greet';

function App() {
  return (
    <div className="App">
      <Greet name="Vuong Tran 65" messageCount={12} isLoggedIn={true}  />
    </div>
  );
}

export default App;
