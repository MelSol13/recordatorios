import{Routes, Route} from "react-router-dom";
import Todos from "./components/Todos";
import Nuevo from "./components/Nuevo";
import Editar from "./components/Editar";

const App = () =>{
  return(
    <div className="container">
      <Routes>
        <Route path="/" exact element={<Todos/>} />
        <Route path="/nuevo" element={<Nuevo/>}/>
        <Route path="/editar/:id" element={<Editar/>}/>
      </Routes>
    </div>
  )
}

export default App;
