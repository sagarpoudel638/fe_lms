
import DefaultLayout from "./components/layout/DefaultLayout";
import UserLayout from "./components/layout/UserLayout";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <Routes>
        {/**Public pages */}
        <Route path="login" element={<Login />}></Route>
        <Route path="signup" element={<Signup />}></Route>
        <Route path="/" element={<DefaultLayout />}>
          
        </Route>

        {/**Private pages */}

        <Route path="/user" element={<UserLayout />}>
          <Route path="dashboard" element={<Dashboard />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
