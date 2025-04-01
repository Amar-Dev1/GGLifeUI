import {
  Dashboard,
  HomePage,
  Logout,
  Signup,
  Login,
  ThemeProvider,
} from "./index";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
