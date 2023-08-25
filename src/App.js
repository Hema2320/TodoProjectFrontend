import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import Todos from './components/Todos';
import Login from "./components/Login";
import Register from "./components/Register";
import ChangePassword from "./Pages/ChangePassword";
import ForgetPassword from "./Pages/ForgetPassword";


function App() {
  return (
    <div>
      <BrowserRouter>
       <Routes>
       <Route path="/reset-password" element={<ForgetPassword />} />
       <Route path="/user/reset/:id/:token" element={<ChangePassword />} />
       <Route path="/login" element={<Login />} />
       <Route path="/register" element={<Register />} />
       <Route path="/todoform" element={<TodoForm/>}/> 
       <Route path="/todos" element={<Todos/>}/>
       <Route path="/" element={<Login/>}/>
        
       </Routes>
      </BrowserRouter>
     {/* <Header /> 
    <TodoForm /> 
       <Todos />  */}
    </div>
  );
}

export default App;