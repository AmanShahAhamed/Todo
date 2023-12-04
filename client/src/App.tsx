import "./App.css";
import Filter from "./Components/Filter";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="container-fluid mx-1 my-1">
      <Header></Header>
      <Navbar></Navbar>
      <Filter></Filter>
    </div>
  );
}

export default App;
