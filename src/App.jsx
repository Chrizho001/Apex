import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import AuthLayout from "./layout/AuthLayout";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Welcome from "./pages/Welcome";
import PasswordResetConfirm from "./pages/PasswordResetConfirm";
import RequestPasswordReset from "./pages/RequestPasswordReset";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="welcome" element={<Welcome />} />
          <Route
            path="password-reset-confirm"
            element={<PasswordResetConfirm />}
          />
          <Route path="password-reset" element={<RequestPasswordReset />} />
        </Route>

        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
      {/* <ToastContainer /> */}
    </>
  );
};

export default App;
