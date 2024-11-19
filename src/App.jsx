import "./App.css";
import DefaultLayout from "./components/layout/DefaultLayout";
import UserLayout from "./components/layout/UserLayout";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        {/**Public pages */}
       
        <Route path="/" element={<DefaultLayout/>} 
        
        />
       

        {/**Private pages */}
        
          <Route path="/user" element={<UserLayout/>} >
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          </Route>
          
       
      </Routes>
    </>
  );
}

export default App;
