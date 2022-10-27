import './App.css';
import { CustomComponent } from './html/CustomComponent';

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
      <CustomButton variant={"primary"}>Primary BTN</CustomButton>
    </div>
  );
}

export default App;
