import Nav from "./Components/Elements/Nav";
import "./App.css";
import DisplayWindow from "./Components/Elements/DisplayWindow/DisplayWindow";

function App() {
  const navDisplay = [
    {
      id: "e1",
      title: "About Me",
    },
    {
      id: "e2",
      title: "Working Projects",
    },
    {
      id: "e3",
      title: "Work History" 
    },
    {
      id:"e4",
      title: "Gallery",
    },
  ];
  return (
    <div>
      <Nav items= {navDisplay}></Nav>
      <DisplayWindow></DisplayWindow>
    </div>
  );
}

export default App;
