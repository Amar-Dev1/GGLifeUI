import {
  Dashboard,
  HomePage,
  Logout,
  Signup,
  Login,
  ThemeProvider,
  Home,
  CurrentPlan,
  CreatePlan,
  SuccessfulWeeks,
  FaildWeeks,
  AllWeeks,
  Profile,
  Notifications
} from "./index";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<Dashboard />}>
              <Route index element={<Home />} /> {/* Default content */}
              <Route path="currentplan" element={<CurrentPlan />} />
              <Route path="createplan" element={<CreatePlan />} />
              <Route path="successfulweeks" element={<SuccessfulWeeks />} />
              <Route path="faildweeks" element={<FaildWeeks />} />
              <Route path="allweeks" element={<AllWeeks />} />
              <Route path="profile" element={<Profile />} />
              <Route path="notifications" element={<Notifications />} />
            </Route>
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
