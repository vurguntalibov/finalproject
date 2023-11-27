 
 import Sidebar from "./Components/Sidebar";
 import Main from "./Components/Main";
 import "./Css/App.css"
 import { BrowserRouter } from "react-router-dom";
 
function App() {

  return ( 
    <div className="App">
      <BrowserRouter>
      <Sidebar/>
      <Main/> 

      </BrowserRouter>
    </div> 
  );
}

export default App;
