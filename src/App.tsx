import { useAuth } from "./hooks/useAuth";
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
  Notifications,
  Verification,
} from "./index";
import { BrowserRouter, Routes, Route ,Navigate} from "react-router-dom";

function App() {
  const auth = useAuth();
  return (
    <>
      <ThemeProvider>
        <BrowserRouter>
        <Routes>
  {/* Protected Routes */}
  {auth ? (
    <Route path="/dashboard" element={<Dashboard />}>
      <Route index element={<Home />} />
      <Route path="currentplan" element={<CurrentPlan />} />
      <Route path="createplan" element={<CreatePlan />} />
      <Route path="successfulweeks" element={<SuccessfulWeeks />} />
      <Route path="faildweeks" element={<FaildWeeks />} />
      <Route path="allweeks" element={<AllWeeks />} />
      <Route path="profile" element={<Profile />} />
      <Route path="notifications" element={<Notifications />} />
    </Route>
  ) : (
    <Route path="/dashboard/*" element={<Navigate to="/login" replace />} />
  )}

  {/* Public Routes */}
  <Route path="/" element={auth ? <Navigate to="/dashboard" replace /> : <HomePage />} />
  <Route path="/signup" element={<Signup />} />
  <Route path="/verify-email/" element={<Verification />} />
  <Route path="/verify-email/:token" element={<Verification />} />
  <Route path="/login" element={<Login />} />
  <Route path="/logout" element={<Logout />} />
</Routes>

        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
